import { CartAttributeOption } from '@/types/cart'

export const generateCartItemId = (
  attributes: CartAttributeOption[],
  productId?: string
): string => {
  let id = `${productId}` // Bắt đầu với productId
  console.log('Type of attributes:', typeof attributes)
  console.log('Is attributes an array?', Array.isArray(attributes))
  console.log('Attributes:', attributes)

  if (attributes.length === 0) {
    // Nếu không có thuộc tính, chỉ sử dụng productId làm ID
    return id
  } // Tránh lỗi nếu không có thuộc tính

  console.log('attributes', attributes)

  // Nếu có thuộc tính, tiếp tục xử lý
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

// import { CartAttributeOption } from '@/types/cart'

// export const generateCartItemId = (
//   attributes: CartAttributeOption[],
//   productId?: string
// ): string => {
//   if (attributes.length === 0) {
//     // Nếu không có thuộc tính, sử dụng productId
//     return `${productId}`
//   }

//   // Nếu có thuộc tính, tiếp tục xử lý
//   // 🔥 Sắp xếp attributes theo attribute_id để đảm bảo thứ tự luôn cố định
//   const sortedAttributes = [...attributes].sort(
//     (a, b) => a.attribute_id - b.attribute_id
//   )

//   const attributesPart = sortedAttributes
//     .map(
//       attr =>
//         `${attr.product_id}_${attr.attribute_id}-${attr.name.replace(
//           /\s+/g,
//           '-'
//         )}`
//     ) // Gộp thuộc tính
//     .join('_')

//   // Trả về ID dựa trên thuộc tính nếu có
//   return attributesPart
// }
