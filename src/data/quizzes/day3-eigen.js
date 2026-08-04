export default {
  id: 'day3-eigen',
  title: 'Quiz Trị riêng & Vector riêng',
  questions: [
    {
      id: 'eg1',
      type: 'output-prediction',
      topic: 'Trị riêng',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 0], [0, 1]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues)`,
      options: ['[1. 1.]', '[0. 0.]', '[2. 2.]', '[1. 0.]'],
      answerIndex: 0,
      explanation: 'Ma trận đơn vị có trị riêng [1. 1.].',
    },
    {
      id: 'eg2',
      type: 'multiple-choice',
      topic: 'Trị riêng',
      question: 'Trị riêng (eigenvalue) là…',
      options: ['Mảng', 'Số (vô hướng)', 'Ma trận', 'Chuỗi'],
      answerIndex: 1,
      explanation: 'Trị riêng là các con số (vô hướng), lưu trong mảng 1 chiều.',
    },
    {
      id: 'eg3',
      type: 'output-prediction',
      topic: 'Trị riêng',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 0], [0, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvectors[:, 0])`,
      options: ['[1. 0.]', '[0. 1.]', '[2. 3.]', '[0. 0.]'],
      answerIndex: 0,
      explanation: 'eigenvectors[:, 0] là cột đầu tiên = [1. 0.].',
    },
    {
      id: 'eg4',
      type: 'multiple-choice',
      topic: 'Trị riêng',
      question: 'Vector riêng được lưu thế nào trong kết quả np.linalg.eig?',
      options: ['Theo hàng', 'Theo cột', 'Là một số đơn', 'Là danh sách chuỗi'],
      answerIndex: 1,
      explanation: 'Vector riêng được lưu theo CỘT của mảng eigenvectors.',
    },
    {
      id: 'eg5',
      type: 'output-prediction',
      topic: 'Trị riêng',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[5, 0], [0, 7]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues[1])`,
      options: ['5.0', '7.0', '0.0', '1.0'],
      answerIndex: 1,
      explanation: 'eigenvalues[1] là trị riêng thứ hai = 7.0.',
    },
  ],
}
