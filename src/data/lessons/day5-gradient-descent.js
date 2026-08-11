export default {
  slug: 'day5-gradient-descent',
  title: 'Gradient Descent',
  subtitle: 'Cập nhật tham số để tối thiểu hóa chi phí',
  module: 'Module C · Kiến thức AI',
  time: '13 phút',
  difficulty: 'Easy',
  importance: 'High',
  assessmentTip: 'Nhớ công thức θ_new = θ_old − α·∇J và câu thần chú: Tính Cost → lấy Gradient → đi NGƯỢC gradient → cập nhật. Dấu trừ (−) chính là "đi ngược gradient để xuống Cost". Learning rate lớn dễ vọt qua.',
  quizId: 'day5-gradient-descent',
  objectives: [
    'Hiểu mục tiêu là tối thiểu hóa cost/loss',
    'Tính θ_new = θ_old − α·∇J',
    'So sánh learning rate nhỏ và lớn',
    'Hiểu đạo hàm/GD đứng ở đâu trong vòng học',
  ],
  whatIsIt: [
    'Gradient descent là cách model học các tham số (b₀, b₁, θ) để cost nhỏ nhất.',
    'Đây là phần "model học thế nào": Prediction → Loss → Gradient → Update.',
    'Công thức cập nhật: θ_new = θ_old − α·∇J.',
  ],
  whyImportant: [
    'Gradient descent xuất hiện trong khái niệm, và đề có thể yêu cầu tính một bước.',
    'Kỳ đánh giá có thể hỏi tính θ mới khi cho θ, learning rate và gradient.',
    'Hiểu learning rate giúp trả lời câu hỏi so sánh.',
  ],
  keyConcepts: [
    'Vòng học: Prediction → Loss/Cost → Derivative/Gradient → Update → Prediction tốt hơn',
    'Cost/Loss: đại lượng cần tối thiểu hóa',
    'Công thức cập nhật: θ_new = θ_old − α·∇J',
    'α (learning rate): kích thước bước đi',
    '🧠 Mẹo: dấu trừ (−) = đi NGƯỢC gradient để đi xuống Cost',
    'Gradient dương → trừ; gradient âm → cộng (về phía tối thiểu)',
    'Learning rate nhỏ: bước nhỏ, chậm, an toàn',
    'Learning rate lớn: bước lớn, nhanh, dễ vọt qua / phân kỳ',
  ],
  examples: [
    {
      code: `# Mot buoc gradient descent
theta = 5.0
alpha = 0.1
gradient = 3.0       # dao ham cua cost tai theta
theta_new = theta - alpha * gradient
print(theta_new)     # 5.0 - 0.1*3 = 4.7`,
      note: 'Nhân learning rate với gradient rồi trừ khỏi θ. Gradient dương → giảm θ (đi ngược lên dốc, xuống đáy cost).',
    },
    {
      code: `# So sanh learning rate
# nho:  alpha=0.01, gradient=4, theta=2
# theta_new = 2 - 0.01*4 = 1.96  (buoc nho)
# lon:  alpha=1.0, gradient=4, theta=2
# theta_new = 2 - 1.0*4 = -2      (buoc lon, co the vuot qua)`,
      note: 'Learning rate nhỏ → bước nhỏ, an toàn; lớn → bước lớn, có thể vọt qua điểm tối thiểu.',
    },
    {
      code: `# GD o dau trong vong hoc?
# 1. Prediction:  y_hat = b0 + b1*x
# 2. Loss/Cost:   model sai bao nhieu (vi du MSE)
# 3. Gradient:    dao ham cua Cost -> biet nen chinh theo huong nao
# 4. Update:      theta_new = theta_old - alpha * gradient
# 5. Lap lai -> Prediction tot hon`,
      note: 'Đây là toàn bộ vòng học bạn cần hình dung: prediction → loss → gradient → update → tốt hơn.',
    },
  ],
  assessmentQs: [
    'Mục tiêu của gradient descent là gì?',
    'Cho θ=5, α=0.1, gradient=3, tính θ_new.',
    'Dấu trừ trong công thức có ý nghĩa gì?',
    'Learning rate nhỏ có tác dụng gì?',
    'Learning rate quá lớn có thể gây ra điều gì?',
    'Gradient dương làm θ tăng hay giảm?',
  ],
  mistakes: [
    'Cộng thay vì trừ α·∇J — phải đi NGƯỢC gradient.',
    'Quên nhân learning rate với gradient trước khi trừ.',
    'Nghĩ learning rate lớn luôn tốt hơn — nó có thể gây phân kỳ.',
    'Nhầm dấu: gradient dương làm θ giảm (về phía cực tiểu).',
    'Quên chữ J (cost) trong ∇J.',
  ],
  summary: [
    'Vòng học: Prediction → Loss → Gradient → Update → tốt hơn.',
    'θ_new = θ_old − α·∇J (dấu − = đi ngược gradient).',
    'α nhỏ → bước nhỏ, an toàn; α lớn → dễ vọt qua.',
    'Gradient dương làm θ giảm; âm làm θ tăng.',
  ],
  cheatSheet: [
    { term: 'Vòng học', def: 'Prediction → Loss → Gradient → Update → tốt hơn' },
    { term: 'Công thức', def: 'θ_new = θ_old − α·∇J' },
    { term: 'Dấu −', def: 'đi ngược gradient để xuống Cost' },
    { term: 'α (learning rate)', def: 'kích thước bước đi' },
    { term: '∇J', def: 'gradient (đạo hàm) của cost' },
    { term: 'Mục tiêu', def: 'tối thiểu hóa cost/loss' },
    { term: 'α nhỏ / α lớn', def: 'chậm-an toàn / nhanh-dễ vọt qua' },
  ],
}
