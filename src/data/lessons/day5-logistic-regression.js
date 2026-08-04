export default {
  slug: 'day5-logistic-regression',
  title: 'Hồi quy logistic',
  subtitle: 'Dự đoán một nhãn (phân loại) bằng xác suất',
  module: 'Module C · Kiến thức AI',
  time: '10 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Nhớ rằng hồi quy logistic dùng cho phân loại (nhãn), không phải số. Nó đầu ra một xác suất từ 0 đến 1.',
  quizId: 'day5-logistic-regression',
  objectives: [
    'Hiểu hồi quy logistic làm gì',
    'Biết đó là bài toán phân loại',
    'Hiểu nó đầu ra một xác suất',
  ],
  whatIsIt: [
    'Hồi quy logistic dự đoán một nhãn, không phải một số.',
    'Nó dùng cho phân loại (ví dụ: thư rác hay không).',
    'Nó đầu ra một xác suất từ 0 đến 1.',
  ],
  whyImportant: [
    'Hồi quy logistic là chủ đề được xác nhận ưu tiên cao.',
    'Câu hỏi kiểm tra nó là hồi quy hay phân loại.',
    'Hiểu đầu ra xác suất là điều then chốt.',
  ],
  keyConcepts: [
    'Dùng cho phân loại (nhãn)',
    'Đầu ra một xác suất từ 0 đến 1',
    'Một ngưỡng (thường 0.5) quyết định nhãn',
    'Dù tên gọi, nó KHÔNG dùng để dự đoán số',
    'Ví dụ: phát hiện thư rác, quyết định có/không',
  ],
  examples: [
    {
      code: `# Ý tưởng (không chạy được)
# Dự đoán email có phải thư rác (1) hay không (0)
# Mô hình đầu ra một xác suất, ví dụ 0.85
probability = 0.85
if probability >= 0.5:
    print("Spam")   # 0.85 >= 0.5 → Spam
else:
    print("Not spam")`,
      note: 'Hồi quy logistic đầu ra một xác suất. Ngưỡng (0.5) quyết định nhãn.',
    },
    {
      code: `# Ví dụ: dự đoán khách có mua hàng không (có/không)
# Mô hình đầu ra xác suất = 0.3
probability = 0.3
if probability >= 0.5:
    print("Will buy")
else:
    print("Will not buy")  # 0.3 < 0.5 → Will not buy`,
      note: 'Kết quả là một xác suất; ngưỡng quyết định nhãn.',
    },
  ],
  assessmentQs: [
    'Hồi quy logistic là hồi quy hay phân loại?',
    'Hồi quy logistic đầu ra gì?',
    'Ngưỡng thường dùng là bao nhiêu?',
    'Một ví dụ ứng dụng là gì?',
  ],
  mistakes: [
    'Nghĩ hồi quy logistic dự đoán số — nó dự đoán nhãn.',
    'Quên nó đầu ra một xác suất.',
    'Nhầm nó với hồi quy tuyến tính.',
    'Quên ngưỡng 0.5.',
  ],
  summary: [
    'Hồi quy logistic dùng cho phân loại.',
    'Nó đầu ra một xác suất từ 0 đến 1.',
    'Ngưỡng 0.5 quyết định nhãn.',
    'Nó khác hồi quy tuyến tính.',
  ],
  cheatSheet: [
    { term: 'Hồi quy logistic', def: 'phân loại (nhãn)' },
    { term: 'Đầu ra', def: 'xác suất từ 0 đến 1' },
    { term: 'Ngưỡng', def: '0.5 quyết định nhãn' },
    { term: 'Ví dụ', def: 'thư rác hay không' },
    { term: 'Không dùng cho', def: 'dự đoán số liên tục' },
  ],
}
