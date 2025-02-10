import { CartAttributeOption } from '@/types/cart'

export const generateCartItemId = (
  attributes: CartAttributeOption[]
): string => {
  if (!attributes.length) return `temp_${Date.now()}` // Tránh lỗi nếu không có thuộc tính

  const product_id = attributes[0]?.product_id // 🛠 Lấy product_id từ thuộc tính đầu tiên

  let id = `${product_id}` // Bắt đầu với product_id

  // 🔥 Sắp xếp attributes theo attribute_id để đảm bảo thứ tự luôn cố định
  const sortedAttributes = [...attributes].sort(
    (a, b) => a.attribute_id - b.attribute_id
  )

  const attributesPart = sortedAttributes
    .map(attr => `${attr.attribute_id}-${attr.name.replace(/\s+/g, '-')}`) // Gộp thuộc tính
    .join('_')

  id += `_${attributesPart}` // Thêm phần thuộc tính vào ID

  return id // Trả về ID duy nhất
}
