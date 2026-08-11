export default {
  slug: 'day5-logistic-regression',
  title: 'Hồi quy logistic',
  subtitle: 'Tính z, sigmoid, xác suất và ngưỡng phân loại',
  module: 'Module C · Kiến thức AI',
  time: '14 phút',
  difficulty: 'Easy',
  importance: 'High',
  assessmentTip: 'Nhớ chuỗi tính tay: z = b₀ + b₁x → sigmoid σ(z) → xác suất → ngưỡng 0.5 quyết định nhãn. Đặc biệt σ(0) = 0.5 và z>0 → nhãn 1.',
  quizId: 'day5-logistic-regression',
  objectives: [
    'Tính z = b₀ + b₁x',
    'Tính sigmoid σ(z) và biết σ(0) = 0.5',
    'Chuyển xác suất → nhãn qua ngưỡng 0.5',
    'Nhận biết z > 0 hay z < 0 quyết định nhãn',
  ],
  whatIsIt: [
    'Hồi quy logistic dự đoán một nhãn (phân loại), không phải một số.',
    'Trước tiên nó tính một giá trị tuyến tính z = b₀ + b₁·x.',
    'Sau đó nén z thành xác suất trong khoảng 0–1 bằng hàm sigmoid.',
    'Ngưỡng (thường 0.5) quyết định nhãn cuối cùng.',
  ],
  whyImportant: [
    'Hồi quy logistic là chủ đề được xác nhận ưu tiên cao.',
    'Kỳ đánh giá có thể hỏi tính tay z, sigmoid và chuyển xác suất thành nhãn.',
    'Nhớ σ(0) = 0.5 giúp trả lời nhanh nhiều câu trắc nghiệm.',
  ],
  keyConcepts: [
    'Điểm tuyến tính: z = b₀ + b₁·x',
    'Sigmoid: σ(z) = 1 / (1 + e^(−z))',
    'σ(0) = 0.5 (điểm giữa)',
    'Xác suất p = σ(z); p càng gần 1 nghĩa là khả năng nhãn 1 càng cao',
    'Ngưỡng 0.5: p ≥ 0.5 → nhãn 1; p < 0.5 → nhãn 0',
    'Quy tắc nhanh: z > 0 → p > 0.5 → nhãn 1 (và ngược lại)',
  ],
  examples: [
    {
      code: `# Tính z = b0 + b1*x
b0, b1, x = -2, 1, 3
z = b0 + b1 * x
print(z)  # 1.0  (z > 0 -> xac suat > 0.5 -> nhan 1)

# Nhan biet nhan ma khong can may tinh
# z = 1 > 0  ->  p = sigmoid(1) > 0.5  ->  nhan 1`,
      note: 'z > 0 → xác suất > 0.5 → nhãn 1. Không cần máy tính để biết nhãn theo dấu của z.',
    },
    {
      code: `import math
def sigmoid(z):
    return 1 / (1 + math.exp(-z))

print(sigmoid(0))   # 0.5
print(sigmoid(1))   # ~0.731 (> 0.5 -> nhan 1)
print(sigmoid(-1))  # ~0.269 (< 0.5 -> nhan 0)`,
      note: 'σ(0) = 0.5. Nếu z dương thì xác suất trên 0.5 → nhãn 1; z âm → dưới 0.5 → nhãn 0.',
    },
  ],
  assessmentQs: [
    'Cho b₀, b₁, x, tính z như thế nào?',
    'σ(0) bằng bao nhiêu?',
    'Nếu z > 0, xác suất lớn hơn hay nhỏ hơn 0.5? Nhãn là gì?',
    'Ngưỡng mặc định để phân loại là bao nhiêu?',
    'Sigmoid biến z thành dải giá trị nào?',
  ],
  mistakes: [
    'Nghĩ hồi quy logistic dự đoán số — nó dự đoán nhãn.',
    'Quên σ(0) = 0.5.',
    'Nhầm dấu z: z dương mới tương ứng xác suất > 0.5 (nhãn 1).',
    'Bỏ qua bước sigmoid, nói xác suất = z.',
    'Quên ngưỡng 0.5 khi chuyển xác suất sang nhãn.',
  ],
  summary: [
    'Tính z = b₀ + b₁x.',
    'Sigmoid nén z thành xác suất 0–1; σ(0) = 0.5.',
    'Ngưỡng 0.5 quyết định nhãn 0/1.',
    'z > 0 → nhãn 1; z < 0 → nhãn 0.',
  ],
  cheatSheet: [
    { term: 'Điểm tuyến tính', def: 'z = b₀ + b₁·x' },
    { term: 'Sigmoid', def: 'σ(z) = 1 / (1 + e^(−z))' },
    { term: 'Giá trị đặc biệt', def: 'σ(0) = 0.5' },
    { term: 'Ngưỡng', def: '0.5: p ≥ 0.5 → nhãn 1' },
    { term: 'Quy tắc nhanh', def: 'z > 0 → nhãn 1; z < 0 → nhãn 0' },
    { term: 'Dải đầu ra', def: 'xác suất từ 0 đến 1' },
  ],
}
