// Danh sách tài khoản — mỗi người dùng có progress & lịch sử lỗi riêng.
export const ACCOUNTS = [
  { id: 'dung', name: 'Dũng' },
  { id: 'an', name: 'An' },
  { id: 'minh', name: 'Minh' },
]

export function getAccount(id) {
  return ACCOUNTS.find((a) => a.id === id) || null
}
