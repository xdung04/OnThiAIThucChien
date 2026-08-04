export default {
  slug: 'day2-matrix-inverse',
  title: 'Ma trận nghịch đảo',
  subtitle: 'Nghịch đảo là gì và cách đọc np.linalg.inv()',
  module: 'Module A · Toán học',
  time: '10 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Bạn sẽ không cần tính nghịch đảo bằng tay. Chỉ cần đọc np.linalg.inv() và hiểu nó trả về gì.',
  quizId: 'day2-matrix-inverse',
  objectives: [
    'Hiểu nghịch đảo của ma trận là gì',
    'Đọc np.linalg.inv() và dự đoán kết quả',
    'Biết khi nào một ma trận có nghịch đảo',
  ],
  whatIsIt: [
    'Nghịch đảo của ma trận A được viết là A⁻¹.',
    'Nhân A với A⁻¹ sẽ cho ma trận đơn vị.',
    'Trong NumPy, np.linalg.inv(A) tính nghịch đảo.',
  ],
  whyImportant: [
    'Ma trận nghịch đảo là chủ đề được xác nhận ưu tiên cao.',
    'Câu hỏi đưa np.linalg.inv() và hỏi kết quả.',
    'Bạn cần nhận biết nghịch đảo, không cần suy ra.',
  ],
  keyConcepts: [
    'A · A⁻¹ = ma trận đơn vị',
    'np.linalg.inv(A) trả về nghịch đảo',
    'Chỉ ma trận vuông mới có nghịch đảo',
    'Ma trận không có nghịch đảo gọi là suy biến (singular)',
    'Ma trận đơn vị có 1 trên đường chéo, 0 ở chỗ khác',
  ],
  examples: [
    {
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
print(np.linalg.inv(A))
# [[-2.   1. ]
#  [ 1.5 -0.5]]`,
      note: 'np.linalg.inv(A) trả về nghịch đảo của A.',
    },
    {
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
A_inv = np.linalg.inv(A)
print(np.dot(A, A_inv))
# [[1. 0.]
#  [0. 1.]]`,
      note: 'A nhân với nghịch đảo cho ma trận đơn vị (1 trên đường chéo).',
    },
    {
      code: `import numpy as np
I = np.eye(2)
print(I)
# [[1. 0.]
#  [0. 1.]]`,
      note: 'np.eye(2) tạo ma trận đơn vị 2×2.',
    },
  ],
  assessmentQs: [
    'np.linalg.inv(A) trả về gì?',
    'A · A⁻¹ bằng gì?',
    'Những ma trận nào có thể có nghịch đảo?',
    'Ma trận đơn vị là gì?',
  ],
  mistakes: [
    'Nhầm nghịch đảo với chuyển vị.',
    'Nghĩ mọi ma trận đều có nghịch đảo — chỉ ma trận vuông, không suy biến mới có.',
    'Quên rằng A · A⁻¹ = ma trận đơn vị.',
    'Cố tính nghịch đảo bằng tay — bạn chỉ cần đọc code.',
  ],
  summary: [
    'np.linalg.inv(A) tính nghịch đảo.',
    'A · A⁻¹ = ma trận đơn vị.',
    'Chỉ ma trận vuông mới có thể có nghịch đảo.',
    'Ma trận đơn vị có 1 trên đường chéo.',
  ],
  cheatSheet: [
    { term: 'np.linalg.inv(A)', def: 'trả về nghịch đảo của A' },
    { term: 'A · A⁻¹', def: 'ma trận đơn vị' },
    { term: 'identity matrix', def: '1 trên đường chéo, 0 ở chỗ khác' },
    { term: 'np.eye(n)', def: 'tạo ma trận đơn vị n×n' },
    { term: 'singular', def: 'ma trận không có nghịch đảo' },
  ],
}
