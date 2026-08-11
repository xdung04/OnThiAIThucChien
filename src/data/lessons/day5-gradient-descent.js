export default {
  slug: 'day5-gradient-descent',
  title: 'Gradient Descent',
  subtitle: 'Cập nhật tham số để tối thiểu hóa chi phí',
  module: 'Module C · Kiến thức AI',
  time: '13 phút',
  difficulty: 'Easy',
  importance: 'High',
  assessmentTip: 'Nhớ công thức θ_new = θ_old − α·∇J. Cho θ, learning rate α và gradient, bạn chỉ cần nhân α với gradient rồi trừ khỏi θ. Learning rate lớn dễ vọt qua, nhỏ thì chậm mà an toàn.',
  quizId: 'day5-gradient-descent',
  objectives: [
    'Hiểu mục tiêu là tối thiểu hóa cost/loss',
    'Tính θ_new = θ_old − α·∇J',
    'So sánh learning rate nhỏ và lớn',
    'Hiểu vai trò của gradient trong cập nhật',
  ],
  whatIsIt: [
    'Gradient descent là cách tìm tham số làm cho cost (lỗi) nhỏ nhất.',
    'Mỗi bước, ta trừ một lượng tỉ lệ với gradient khỏi tham số.',
    'Công thức: θ_new = θ_old − α·∇J.',
  ],
  whyImportant: [
    'Gradient descent xuất hiện trong khái niệm và câu hỏi có thể yêu cầu tính một bước.',
    'Kỳ đánh giá có thể hỏi tính θ mới khi cho θ, learning rate và gradient.',
    'Hiểu learning rate giúp trả lời câu hỏi so sánh.',
  ],
  keyConcepts: [
    'Cost/Loss: đại lượng cần tối thiểu hóa',
    'Công thức cập nhật: θ_new = θ_old − α·∇J',
    'α (learning rate): kích thước bước đi',
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
      note: 'Nhân learning rate với gradient rồi trừ khỏi θ. Gradient dương → giảm θ.',
    },
    {
      code: `# So sanh learning rate
# nho:  alpha=0.01, gradient=4, theta=2
# theta_new = 2 - 0.01*4 = 1.96  (buoc nho)
# lon:  alpha=1.0, gradient=4, theta=2
# theta_new = 2 - 1.0*4 = -2      (buoc lon, co the vuot qua)`,
      note: 'Learning rate nhỏ → bước nhỏ hơn, an toàn hơn; lớn → bước lớn, có thể vọt qua điểm tối thiểu.',
    },
  ],
  assessmentQs: [
    'Mục tiêu của gradient descent là gì?',
    'Cho θ=5, α=0.1, gradient=3, tính θ_new.',
    'Learning rate nhỏ có tác dụng gì?',
    'Learning rate quá lớn có thể gây ra điều gì?',
    'Gradient dương làm θ tăng hay giảm?',
  ],
  mistakes: [
    'Cộng thay vì trừ α·∇J.',
    'Quên nhân learning rate với gradient trước khi trừ.',
    'Nghĩ learning rate lớn luôn tốt hơn — nó có thể gây phân kỳ.',
    'Nhầm dấu: gradient dương làm θ giảm (về phía cực tiểu).',
    'Quên chữ J (cost) trong ∇J.',
  ],
  summary: [
    'Gradient descent tối thiểu hóa cost.',
    'θ_new = θ_old − α·∇J.',
    'α nhỏ → bước nhỏ, an toàn; α lớn → dễ vọt qua.',
    'Gradient dương làm θ giảm; âm làm θ tăng.',
  ],
  cheatSheet: [
    { term: 'Công thức', def: 'θ_new = θ_old − α·∇J' },
    { term: 'α (learning rate)', def: 'kích thước bước đi' },
    { term: '∇J', def: 'gradient (đạo hàm) của cost' },
    { term: 'Mục tiêu', def: 'tối thiểu hóa cost/loss' },
    { term: 'α nhỏ', def: 'chậm, an toàn' },
    { term: 'α lớn', def: 'nhanh, có thể vọt qua/phân kỳ' },
  ],
}
