export default {
  slug: 'day7-cnn-convolution',
  title: 'CNN & Phép tích chập (cơ bản)',
  subtitle: 'Hiểu mạng nơ-ron tích chập qua kernel, feature map, stride, padding và output size',
  module: 'Module C · Kiến thức AI',
  time: '10 phút',
  difficulty: 'Beginner',
  importance: 'Medium',
  assessmentTip: 'Đây là câu trắc nghiệm không máy tính. Hãy thuộc công thức Output Size và biết tích chập = "nhân rồi cộng". Khi làm bài, cứ đặt số nhỏ vào công thức mà tính tay.',
  quizId: 'day7-cnn-convolution',
  objectives: [
    'Hiểu CNN là mạng nơ-ron chuyên xử lý ảnh',
    'Biết Kernel/Filter là gì và cách phép Convolution hoạt động',
    'Hiểu Feature Map, Stride và Padding',
    'Tính được Output Size bằng tay với số nhỏ',
  ],
  whatIsIt: [
    'CNN (Convolutional Neural Network) là mạng nơ-ron chuyên xử lý ảnh: nó tìm các đặc trưng cục bộ như đường nét, cạnh, góc.',
    'Convolution (tích chập) là phép toán trượt một bộ lọc nhỏ qua ảnh rồi nhân-cộng để ra bản đồ đặc trưng.',
    'CNN giảm số tham số so với mạng dày đặc, vì cùng một kernel được dùng lại ở mọi vị trí.',
  ],
  whyImportant: [
    'CNN là khái niệm AI phổ biến trong các kỳ trắc nghiệm kiến thức AI (Module C).',
    'Các câu hỏi thường hỏi kernel là gì, convolution làm gì, hoặc tính output size bằng số nhỏ.',
    'Chỉ cần nắm khái niệm và công thức cơ bản là trả lời được — không cần đào sâu.',
  ],
  keyConcepts: [
    'Kernel / Filter: ma trận bộ lọc nhỏ (vd 2×2 hoặc 3×3) quét qua ảnh',
    'Convolution: nhân từng ô của kernel với vùng ảnh tương ứng rồi CỘNG lại',
    'Feature Map: kết quả đầu ra sau tích chập — vùng nào "khớp" kernel thì giá trị cao',
    'Stride: bước nhảy của kernel mỗi lần trượt (stride = 1 là trượt lần lượt từng ô)',
    'Padding: thêm viền (thường là 0) xung quanh ảnh để giữ hoặc kiểm soát kích thước',
    'Output Size: Output = (Input − Kernel + 2×Padding) / Stride + 1',
  ],
  examples: [
    {
      code: `# Tích chập 2×2 (tính tay)
# Ảnh 3×3, kernel 2×2, stride 1, không padding
# Ảnh:
#   1 2 3
#   4 5 6
#   7 8 9
# Kernel:
#   1 0
#   0 1

# Ô góc trên trái:
# (1×1) + (2×0) + (4×0) + (5×1) = 1 + 5 = 6`,
      note: 'Tích chập = nhân từng ô rồi cộng → ra 1 số trong Feature Map.',
    },
    {
      code: `# Output Size: Output = (Input − Kernel + 2×Padding) / Stride + 1
# Ví dụ: Ảnh 5×5, kernel 3×3, padding 1, stride 1
# O = (5 − 3 + 2×1) / 1 + 1 = (4) / 1 + 1 = 5

# Ví dụ: Ảnh 5×5, kernel 3×3, không padding, stride 2
# O = (5 − 3 + 0) / 2 + 1 = (2) / 2 + 1 = 2

# Ví dụ: Ảnh 4×4, kernel 2×2, không padding, stride 2
# O = (4 − 2 + 0) / 2 + 1 = (2) / 2 + 1 = 2`,
      note: 'Kết quả luôn là số dương. Nếu phép chia dư, ta bỏ phần dư (lấy phần nguyên) rồi cộng 1.',
    },
    {
      code: `# Padding để giữ kích thước
# Ảnh 3×3, kernel 3×3, padding 1 -> thêm viền 0:
#  0 0 0 0 0
#  0 1 2 3 0
#  0 4 5 6 0
#  0 7 8 9 0
#  0 0 0 0 0  (5×5)
# O = (3 − 3 + 2×1) / 1 + 1 = 3 -> giữ nguyên 3×3`,
      note: 'Padding thường làm cho ảnh đầu ra có cùng kích thước với ảnh đầu vào.',
    },
  ],
  assessmentQs: [
    'Kernel/Filter trong CNN dùng để làm gì?',
    'Phép tích chập thực hiện thao tác gì trên các con số?',
    'Feature Map là gì?',
    'Thay đổi Stride làm output size tăng hay giảm?',
    'Padding dùng để làm gì?',
    'Với input 5×5, kernel 3×3, stride 1, padding 1, output size là bao nhiêu?',
    'Với input 6×6, kernel 3×3, stride 2, không padding, output size là bao nhiêu?',
  ],
  mistakes: [
    'Tưởng tích chập chỉ là nhân mà quên bước cộng.',
    'Nhầm Stride tăng làm output to hơn (thực tế Stride tăng làm output nhỏ hơn).',
    'Quên nhân 2 vào Padding trong công thức Output Size.',
    'Quên cộng 1 ở cuối công thức Output Size.',
    'Nhầm kernel với feature map.',
  ],
  summary: [
    'CNN xử lý ảnh bằng cách quét kernel nhỏ qua ảnh.',
    'Convolution = nhân từng ô rồi cộng → ra Feature Map.',
    'Kernel càng lớn / Stride càng lớn → Output càng nhỏ; Padding giúp giữ kích thước.',
    'Output = (Input − Kernel + 2×Padding) / Stride + 1.',
  ],
  cheatSheet: [
    { term: 'Kernel/Filter', def: 'bộ lọc nhỏ quét qua ảnh' },
    { term: 'Convolution', def: 'nhân từng ô rồi cộng' },
    { term: 'Feature Map', def: 'kết quả sau tích chập' },
    { term: 'Stride', def: 'bước nhảy của kernel; càng lớn output càng nhỏ' },
    { term: 'Padding', def: 'thêm viền 0 để giữ kích thước' },
    { term: 'Output Size', def: '(Input − Kernel + 2P)/Stride + 1' },
  ],
}
