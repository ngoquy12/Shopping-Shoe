/**
 * Tên hàm: Kiểm tra định dạng email
 * @param {*} email Email nhập vào từ người dùng
 * @returns  True: Nếu đúng định dạng và false nếu sai định dạng
 * CreatedDate: 18/04/2023 // Ngày viết
 * Author/CreatedBy: NVQUY //Người viết
 * ModifiedDate: 19/04/2023
 */
export const checkEmai = (email) => {
  return email;
};
/**
 * hàm format thời gian
 * @returns thời gian hiện tại
 * CreatedDate : 17/04/2023
 * Author/CreatedBy: Ddd
 * ModifiedDate:18/04/2023
 */

export const formatDate = () => {
  // Tạo đối tượng Date mới
  let date = new Date();

  // Lấy ngày, tháng và năm hiện tại
  let day = date.getDate();
  let month = date.getMonth() + 1; // Lưu ý: Tháng bắt đầu từ 0 (0 là tháng 1, 11 là tháng 12)
  let year = date.getFullYear();

  // In ra ngày, tháng và năm hiện tại
  return `Ngày hiện tại là ${day}/${month}/${year}`;
};
