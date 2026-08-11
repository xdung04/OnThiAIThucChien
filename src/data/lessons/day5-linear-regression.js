export default {
  slug: 'day5-linear-regression',
  title: 'Hồi quy tuyến tính',
  subtitle: 'Dự đoán số, tính sai số (residual), SSE, MSE và R²',
  module: 'Module C · Kiến thức AI',
  time: '15 phút',
  difficulty: 'Easy',
  importance: 'High',
  assessmentTip: 'Nhớ cả chuỗi tính tay: ŷ = b₀ + b₁x → residual e = y − ŷ → SSE = Σe² → MSE = SSE/n. R² càng gần 1 càng tốt (so sánh 2 mô hình).',
  quizId: 'day5-linear-regression',
  objectives: [
    'Tính dự đoán ŷ từ b₀, b₁ và x',
    'Tính residual e = y − ŷ',
    'Tính SSE và MSE',
    'Hiểu ý nghĩa R² và so sánh hai mô hình',
  ],
  whatIsIt: [
    'Hồi quy tuyến tính dự đoán một số liên tục (giá, nhiệt độ…) bằng một đường thẳng.',
    'Đường thẳng được viết dưới dạng ŷ = b₀ + b₁·x.',
    'b₀ là hệ số chặn (nơi đường cắt trục y); b₁ là hệ số góc (độ dốc).',
    'Mục tiêu là tìm đường thẳng càng sát dữ liệu thật càng tốt.',
  ],
  whyImportant: [
    'Hồi quy tuyến tính là chủ đề được xác nhận ưu tiên cao.',
    'Kỳ đánh giá có thể hỏi tính tay dự đoán, sai số và đánh giá mô hình.',
    'Biết tính SSE, MSE, R² giúp trả lời câu hỏi so sánh hai mô hình.',
  ],
  keyConcepts: [
    'Phương trình dự đoán: ŷ = b₀ + b₁·x',
    'Dự đoán: thay x vào để ra ŷ',
    'Residual (sai số từng điểm): e = y − ŷ',
    'SSE = tổng bình phương các residual (Σ e²)',
    'MSE = SSE / n (n là số điểm dữ liệu)',
    'R²: chỉ số mô hình tốt đến đâu; càng gần 1 càng tốt',
  ],
  examples: [
    {
      code: `# Dự đoán ŷ = b0 + b1*x
b0, b1 = 1, 2
xs = [1, 2, 3]
ys_real = [4, 5, 6]   # giá trị thật
y_hat = [b0 + b1 * x for x in xs]
print(y_hat)  # [3, 5, 7]

# Residual e = y - y_hat
e = [y - yh for y, yh in zip(ys_real, y_hat)]
print(e)  # [1, 0, -1]`,
      note: 'Dự đoán từ b₀, b₁, x; residual là chênh lệch giữa giá trị thật và giá trị dự đoán.',
    },
    {
      code: `# SSE va MSE từ residual [1, 0, -1]
e = [1, 0, -1]
sse = sum(x * x for x in e)
print(sse)      # 2
mse = sse / 3   # n = 3 diem
print(mse)      # 0.666...
print(mse**0.5) # RMSE ~ 0.816`,
      note: 'SSE = Σe² = 1+0+1 = 2. MSE = SSE/n = 2/3. Mô hình có residual càng nhỏ càng tốt.',
    },
  ],
  assessmentQs: [
    'Cho b₀, b₁ và x, tính ŷ như thế nào?',
    'Residual của một điểm là gì?',
    'SSE là gì và tính ra sao?',
    'MSE bằng công thức nào?',
    'R² càng gần 1 nghĩa là gì? Mô hình nào tốt hơn khi so sánh?',
  ],
  mistakes: [
    'Dùng sai thứ tự: residual là thật trừ dự đoán (y − ŷ).',
    'Quên bình phương residual trước khi cộng để ra SSE.',
    'Nhầm MSE (chia cho n) với SSE (không chia).',
    'Nghĩ R² càng thấp càng tốt — thực ra càng gần 1 càng tốt.',
    'Chia SSE cho 2 thay vì n.',
  ],
  summary: [
    'Dự đoán: ŷ = b₀ + b₁·x.',
    'Residual: e = y − ŷ (thật trừ dự đoán).',
    'SSE = Σe²; MSE = SSE/n.',
    'R² gần 1 → mô hình tốt; dùng để so sánh hai mô hình.',
  ],
  cheatSheet: [
    { term: 'Phương trình dự đoán', def: 'ŷ = b₀ + b₁·x' },
    { term: 'b₀ / b₁', def: 'hệ số chặn / hệ số góc' },
    { term: 'Residual', def: 'e = y − ŷ' },
    { term: 'SSE', def: 'Σ e² (tổng bình phương residual)' },
    { term: 'MSE', def: 'SSE / n' },
    { term: 'R²', def: 'càng gần 1 càng tốt' },
    { term: 'So sánh', def: 'mô hình có MSE nhỏ / R² cao hơn thì tốt hơn' },
  ],
}
