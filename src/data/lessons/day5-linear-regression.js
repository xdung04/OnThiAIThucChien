export default {
  slug: 'day5-linear-regression',
  title: 'Hồi quy tuyến tính',
  subtitle: 'Dự đoán một số từ dữ liệu bằng đường thẳng',
  module: 'Module C · Kiến thức AI',
  time: '12 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Nhớ rằng hồi quy tuyến tính dự đoán số liên tục, dùng một đường thẳng (y = mx + b), và là bài toán hồi quy (không phải phân loại).',
  quizId: 'day5-linear-regression',
  objectives: [
    'Hiểu hồi quy tuyến tính làm gì',
    'Biết nó dự đoán các số liên tục',
    'Hiểu phương trình đường thẳng y = mx + b',
  ],
  whatIsIt: [
    'Hồi quy tuyến tính dự đoán một số từ dữ liệu đầu vào.',
    'Nó khớp một đường thẳng vào dữ liệu.',
    'Đường thẳng được mô tả bởi y = mx + b.',
  ],
  whyImportant: [
    'Hồi quy tuyến tính là chủ đề được xác nhận ưu tiên cao.',
    'Câu hỏi kiểm tra nó dự đoán gì và hoạt động thế nào ở mức khái quát.',
    'Không cần suy luận toán học.',
  ],
  keyConcepts: [
    'Dự đoán một số liên tục (ví dụ: giá, nhiệt độ)',
    'Dùng một đường thẳng: y = mx + b',
    'm là hệ số góc (độ dốc của đường thẳng)',
    'b là hệ số chặn (nơi đường cắt trục y)',
    'Đây là bài toán hồi quy, không phải phân loại',
  ],
  examples: [
    {
      code: `# Ý tưởng (không chạy được)
# Dự đoán giá nhà theo diện tích
# y = m * size + b
# y = 100 * size + 50000

size = 120
price = 100 * size + 50000
print(price)  # 62000`,
      note: 'Với một diện tích, đường thẳng dự đoán giá. Đây là một số liên tục.',
    },
    {
      code: `# Ví dụ: dự đoán nhiệt độ theo số giờ nắng
# y = 2 * hours + 20
hours = 5
temp = 2 * hours + 20
print(temp)  # 30`,
      note: 'Mô hình dùng một đường thẳng để dự đoán một con số.',
    },
  ],
  assessmentQs: [
    'Hồi quy tuyến tính dự đoán gì?',
    'Phương trình của đường thẳng là gì?',
    'Hồi quy tuyến tính là hồi quy hay phân loại?',
    'Hệ số góc (m) thể hiện gì?',
  ],
  mistakes: [
    'Nghĩ hồi quy tuyến tính dự đoán nhãn — nó dự đoán số.',
    'Quên phương trình đường thẳng y = mx + b.',
    'Nhầm hệ số góc (m) với hệ số chặn (b).',
    'Nghĩ nó là bài toán phân loại.',
  ],
  summary: [
    'Hồi quy tuyến tính dự đoán một số liên tục.',
    'Nó khớp một đường thẳng: y = mx + b.',
    'm là hệ số góc; b là hệ số chặn.',
    'Đây là bài toán hồi quy.',
  ],
  cheatSheet: [
    { term: 'Hồi quy tuyến tính', def: 'dự đoán một số liên tục' },
    { term: 'Phương trình đường', def: 'y = mx + b' },
    { term: 'm (hệ số góc)', def: 'độ dốc của đường thẳng' },
    { term: 'b (hệ số chặn)', def: 'nơi đường cắt trục y' },
    { term: 'Loại bài toán', def: 'hồi quy (không phải phân loại)' },
  ],
}
