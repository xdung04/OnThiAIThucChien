export default {
  slug: 'day5-linear-regression',
  title: 'Hồi quy tuyến tính',
  subtitle: 'Dự đoán số, sai số (residual), SSE, MSE và R²',
  module: 'Module C · Kiến thức AI',
  time: '16 phút',
  difficulty: 'Easy',
  importance: 'High',
  assessmentTip: 'Thuộc lòng câu thần chú: Dự đoán → sai số → bình phương → CỘNG (SSE) → CHIA (MSE). Và: Residual = REAL − PREDICTED (y − ŷ).',
  quizId: 'day5-linear-regression',
  objectives: [
    'Tính dự đoán ŷ từ b₀, b₁ và x',
    'Tính residual e = y − ŷ',
    'Tính SSE rồi MSE',
    'Hiểu R² và so sánh hai mô hình',
  ],
  whatIsIt: [
    'Hồi quy tuyến tính xoay quanh một câu duy nhất: từ x, dự đoán một giá trị số y.',
    'Đường thẳng dự đoán: ŷ = b₀ + b₁·x.',
    'Mục tiêu là tìm đường thẳng càng sát dữ liệu thật càng tốt.',
  ],
  whyImportant: [
    'Hồi quy tuyến tính là chủ đề được xác nhận ưu tiên cao.',
    'Kỳ đánh giá thường hỏi tính tay dự đoán, sai số và so sánh mô hình.',
    'Biết tính SSE, MSE, R² giúp trả lời câu so sánh hai mô hình.',
  ],
  keyConcepts: [
    'Prediction: ŷ = b₀ + b₁·x',
    'b₀ = intercept (điểm bắt đầu); b₁ = slope (x tăng 1 thì y đổi bao nhiêu)',
    '🧠 Mẹo: "Dự đoán = điểm bắt đầu + độ dốc × x"',
    'Residual (sai số từng điểm): e = y − ŷ',
    '🧠 Mẹo: "Residual = REAL − PREDICTED"; dấu +/− biết model đoán thấp hay cao',
    'SSE = Σ e² — bình phương rồi CỘNG hết',
    'MSE = SSE / n — CHIA cho số điểm',
    'R²: càng gần 1 càng tốt; dùng để so sánh hai mô hình',
  ],
  examples: [
    {
      code: `# Prediction: y_hat = b0 + b1*x
b0, b1 = 2, 3
x = 4
y_hat = b0 + b1 * x
print(y_hat)  # 2 + 3*4 = 14`,
      note: 'Mẹo: "Dự đoán = điểm bắt đầu + độ dốc × x". Với ŷ = 2 + 3x, x=4 → 14.',
    },
    {
      code: `# Residual: e = real - predicted
actual = [3, 5, 8]
predicted = [2, 6, 7]
e = [a - p for a, p in zip(actual, predicted)]
print(e)  # [1, -1, 1]

# SSE = Square roi Sum
sse = sum(x * x for x in e)
print(sse)  # 1 + 1 + 1 = 3

# MSE = SSE / so diem
mse = sse / 3
print(mse)  # 3 / 3 = 1.0`,
      note: 'Mẹo: Residual = REAL − PREDICTED. SSE = bình phương rồi CỘNG. MSE = SSE chia số điểm.',
    },
    {
      code: `# Vi du khac: SSE=12, n=4 -> MSE?
SSE = 12
n = 4
MSE = SSE / n
print(MSE)  # 3`,
      note: 'Nếu đề hỏi "tổng squared errors" → SSE; "mean squared error" → MSE = SSE/n.',
    },
    {
      code: `# Flow thuoc long
# x
#  ->  y_hat = b0 + b1*x
#  ->  residual = y - y_hat
#  ->  residual^2
#  ->  SSE = sum(residual^2)
#  ->  MSE = SSE / n`,
      note: 'Đây là toàn bộ flow tính tay bạn nên thuộc lòng cho Linear Regression.',
    },
  ],
  assessmentQs: [
    'Cho b₀, b₁, x, tính ŷ như thế nào?',
    'Residual của một điểm là gì? (thật trừ dự đoán)',
    'SSE là gì — bình phương rồi làm gì?',
    'MSE bằng công thức nào?',
    'R² càng gần 1 nghĩa là gì? Mô hình nào tốt hơn?',
    'Khi nào dùng SSE thay cho MSE, và ngược lại?',
  ],
  mistakes: [
    'Lộn thứ tự residual: phải là y − ŷ (REAL − PREDICTED).',
    'Quên bình phương residual trước khi cộng để ra SSE.',
    'Nhầm SSE (CỘNG, không chia) với MSE (CHIA cho n).',
    'Nghĩ R² càng thấp càng tốt — thực ra càng gần 1 càng tốt.',
    'Vì residual âm mà loại bỏ — luôn bình phương trước khi cộng.',
  ],
  summary: [
    'Dự đoán = điểm bắt đầu + độ dốc × x → ŷ = b₀ + b₁·x.',
    'Residual = REAL − PREDICTED = y − ŷ.',
    'SSE = bình phương rồi CỘNG; MSE = SSE chia n.',
    'R² gần 1 → mô hình tốt.',
    'Câu thần chú: Dự đoán → sai số → bình phương → CỘNG → CHIA.',
  ],
  cheatSheet: [
    { term: 'Dự đoán', def: 'ŷ = b₀ + b₁·x (điểm bắt đầu + độ dốc × x)' },
    { term: 'b₀ / b₁', def: 'intercept (điểm bắt đầu) / slope (độ dốc)' },
    { term: 'Residual', def: 'e = y − ŷ (REAL − PREDICTED)' },
    { term: 'SSE', def: 'Σ e² (Square rồi Sum)' },
    { term: 'MSE', def: 'SSE / n (chia cho số điểm)' },
    { term: 'R²', def: 'càng gần 1 càng tốt' },
    { term: 'So sánh model', def: 'MSE nhỏ hơn / R² cao hơn → tốt hơn' },
  ],
}
