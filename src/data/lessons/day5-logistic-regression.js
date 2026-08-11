export default {
  slug: 'day5-logistic-regression',
  title: 'Hồi quy logistic',
  subtitle: 'Linear → Sigmoid → Probability → Threshold → Class',
  module: 'Module C · Kiến thức AI',
  time: '16 phút',
  difficulty: 'Easy',
  importance: 'High',
  assessmentTip: 'Mẹo cực mạnh: với threshold = 0.5, KHÔNG cần tính sigmoid — chỉ cần xét dấu của z: z > 0 → Class 1, z < 0 → Class 0. Và nhớ: Probability luôn đem so với threshold, không phải 0.5 cố định.',
  quizId: 'day5-logistic-regression',
  objectives: [
    'Hiểu logistic là 2 tầng: Linear → Sigmoid → Probability → Threshold → Class',
    'Tính z = b₀ + b₁x',
    'Biết σ(0) = 0.5 và quan hệ dấu z với xác suất',
    'Áp dụng ngưỡng (threshold) có thể thay đổi',
  ],
  whatIsIt: [
    'Hồi quy logistic dự đoán một nhãn (class), không phải một số.',
    'Nó gồm 2 tầng: trước tiên tính một giá trị tuyến tính z, rồi nén qua sigmoid thành xác suất.',
    '🧠 Mẹo: "Logistic trước tiên vẫn là Linear" — đừng nghĩ nó hoàn toàn khác Linear Regression.',
    'Cuối cùng so xác suất với threshold để ra class.',
  ],
  whyImportant: [
    'Hồi quy logistic là chủ đề được xác nhận ưu tiên cao.',
    'Kỳ đánh giá thường hỏi tính tay z, sigmoid và chuyển xác suất thành class.',
    'Mẹo xét dấu z giúp trả lời nhanh không cần máy tính.',
  ],
  keyConcepts: [
    '2 tầng: Linear → Sigmoid → Probability → Threshold → Class',
    'Linear score: z = b₀ + b₁·x (nhiều feature thì z = b₀ + b₁x₁ + b₂x₂ + …)',
    'Sigmoid: σ(z) = 1 / (1 + e^(−z)) → biến z thành xác suất trong 0–1',
    '3 điều phải thuộc: σ(0) = 0.5; z > 0 → σ > 0.5; z < 0 → σ < 0.5',
    'Giới hạn: z → +∞ thì σ → 1; z → −∞ thì σ → 0',
    'Mẹo cực mạnh: threshold = 0.5 → z > 0 → Class 1; z < 0 → Class 0 (không cần tính sigmoid)',
    'Threshold có thể đổi: luôn so P với threshold, không phải 0.5 cố định',
  ],
  examples: [
    {
      code: `# Buoc 1: tinh z (linear score)
b0, b1, x = -2, 3, 1
z = b0 + b1 * x
print(z)  # -2 + 3 = 1 (z > 0)

# MEO CUC MANH - khong can tinh sigmoid
# z > 0 -> Probability > 0.5 -> Class 1`,
      note: 'Với threshold 0.5, chỉ cần dấu của z. z = 1 > 0 → P > 0.5 → Class 1.',
    },
    {
      code: `import math
def sigmoid(z):
    return 1 / (1 + math.exp(-z))

print(sigmoid(0))   # 0.5
print(sigmoid(2))   # ~0.881 (> 0.5 -> Class 1)
print(sigmoid(-3))  # ~0.047 (< 0.5 -> Class 0)`,
      note: '3 điều phải thuộc: σ(0)=0.5; z>0 → >0.5; z<0 → <0.5. z càng dương → càng gần 1.',
    },
    {
      code: `# Threshold co the doi - so P voi threshold
P = 0.7

thr = 0.8
print(P >= thr)  # False -> Class 0 (0.7 < 0.8)

thr = 0.6
print(P >= thr)  # True  -> Class 1 (0.7 >= 0.6)`,
      note: 'Probability đem so với THRESHOLD, không phải 0.5 cố định. Cùng một P=0.7 mà threshold khác nhau → class khác nhau.',
    },
    {
      code: `# Flow tinh tay vi du: z = -4 + 2x, x = 3
b0, b1, x = -4, 2, 3
z = b0 + b1 * x
print(z)  # 2
# Sigmoid: P = sigmoid(2). Khong can may tinh, chi can biet P > 0.5
# Threshold = 0.5 -> P > 0.5 -> Class 1`,
      note: 'Full flow: z → sigmoid → xác suất → threshold → class.',
    },
  ],
  assessmentQs: [
    'Cho b₀, b₁, x, tính z như thế nào?',
    'σ(0) bằng bao nhiêu? Nếu z > 0 thì xác suất lớn hơn hay nhỏ hơn 0.5?',
    'Với threshold 0.5, khi nào gán Class 1 mà không cần tính sigmoid?',
    'P = 0.7 và threshold = 0.8 cho class nào? (Class 0)',
    'P = 0.7 và threshold = 0.6 cho class nào? (Class 1)',
    'Z biến thành dải giá trị nào sau sigmoid?',
  ],
  mistakes: [
    'Nghĩ logistic dự đoán số — nó dự đoán class.',
    'Quên σ(0) = 0.5.',
    'Nhầm dấu z: z dương mới tương ứng xác suất > 0.5 (Class 1).',
    'Lộn threshold: luôn so P với threshold đã cho, không cố định 0.5.',
    'Nói "xác suất = z" — phải qua sigmoid (z → σ(z)).',
  ],
  summary: [
    'Logistic = Linear (z = b₀ + b₁x) → Sigmoid → Probability → Threshold → Class.',
    '3 điều: σ(0)=0.5; z>0 → P>0.5; z<0 → P<0.5.',
    'Threshold 0.5 → chỉ cần xét dấu z.',
    'Threshold có thể đổi → luôn so P với threshold.',
    'Câu thần chú: Linear score → Sigmoid → Probability → Threshold → Class.',
  ],
  cheatSheet: [
    { term: '2 tầng', def: 'Linear → Sigmoid → Probability → Threshold → Class' },
    { term: 'Linear score', def: 'z = b₀ + b₁·x' },
    { term: 'Sigmoid', def: 'σ(z) = 1 / (1 + e^(−z))' },
    { term: 'Giá trị đặc biệt', def: 'σ(0) = 0.5; z>0→>0.5; z<0→<0.5' },
    { term: 'Mẹo threshold 0.5', def: 'z > 0 → Class 1; z < 0 → Class 0' },
    { term: 'Threshold thay đổi', def: 'so P với threshold (không cố định 0.5)' },
    { term: 'Output', def: 'Class (phân loại)' },
  ],
}
