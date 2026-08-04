export default {
  slug: 'day3-eigen',
  title: 'Trị riêng & Vector riêng',
  subtitle: 'Đọc np.linalg.eig() và hiểu kết quả của nó',
  module: 'Module A · Toán học',
  time: '12 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Bạn chỉ cần hiểu KẾT QUẢ của np.linalg.eig(). Không có chứng minh, không tính tay.',
  quizId: 'day3-eigen',
  objectives: [
    'Hiểu trị riêng và vector riêng là gì',
    'Đọc kết quả của np.linalg.eig()',
    'Biết phần nào là trị riêng, phần nào là vector riêng',
  ],
  whatIsIt: [
    'Trị riêng (eigenvalue) là một con số (vô hướng) gắn với ma trận.',
    'Vector riêng (eigenvector) là một hướng không đổi khi áp dụng ma trận.',
    'Trong NumPy, np.linalg.eig(A) trả về cả hai.',
  ],
  whyImportant: [
    'Trị riêng và vector riêng là chủ đề được xác nhận ưu tiên cao.',
    'Câu hỏi đưa np.linalg.eig() và hỏi ý nghĩa của kết quả.',
    'Bạn cần nhận biết cấu trúc của kết quả.',
  ],
  keyConcepts: [
    'np.linalg.eig(A) trả về trị riêng và vector riêng',
    'eigenvalues[0] là trị riêng đầu tiên',
    'eigenvectors[:, 0] là vector riêng ứng với eigenvalues[0]',
    'Trị riêng là các con số; vector riêng là các mảng',
    'Kết quả gồm hai phần: trị riêng và vector riêng',
  ],
  examples: [
    {
      code: `import numpy as np
A = np.array([[2, 0], [0, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues)
# [2. 3.]`,
      note: 'eigenvalues là mảng 1 chiều các con số.',
    },
    {
      code: `import numpy as np
A = np.array([[2, 0], [0, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvectors)
# [[1. 0.]
#  [0. 1.]]`,
      note: 'eigenvectors là mảng 2 chiều. Mỗi cột là một vector riêng.',
    },
    {
      code: `import numpy as np
A = np.array([[2, 0], [0, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues[0])        # 2.0
print(eigenvectors[:, 0])    # [1. 0.]`,
      note: 'eigenvalues[0] đi cùng với eigenvectors[:, 0].',
    },
  ],
  assessmentQs: [
    'np.linalg.eig(A) trả về gì?',
    'Phần nào là trị riêng?',
    'Phần nào là vector riêng?',
    'Làm thế nào lấy trị riêng đầu tiên?',
    'Làm thế nào lấy vector riêng ứng với trị riêng đầu tiên?',
  ],
  mistakes: [
    'Nhầm trị riêng (con số) với vector riêng (mảng).',
    'Quên rằng vector riêng được lưu theo CỘT.',
    'Nghĩ eig trả về một giá trị — thực ra nó trả về hai phần.',
    'Cố tính trị riêng bằng tay — bạn chỉ đọc kết quả.',
  ],
  summary: [
    'np.linalg.eig(A) trả về trị riêng và vector riêng.',
    'Trị riêng là con số; vector riêng là mảng.',
    'eigenvalues[0] đi cùng với eigenvectors[:, 0].',
    'Vector riêng được lưu theo cột.',
  ],
  cheatSheet: [
    { term: 'np.linalg.eig(A)', def: 'trả về (eigenvalues, eigenvectors)' },
    { term: 'eigenvalues', def: 'mảng 1 chiều các con số' },
    { term: 'eigenvectors', def: 'mảng 2 chiều, mỗi cột một vector' },
    { term: 'eigenvalues[0]', def: 'trị riêng đầu tiên' },
    { term: 'eigenvectors[:, 0]', def: 'vector riêng ứng với trị riêng đầu tiên' },
  ],
}
