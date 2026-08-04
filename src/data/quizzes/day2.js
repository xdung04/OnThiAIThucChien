export default {
  id: 'day2',
  title: 'Kiểm tra nhanh Ngày 2',
  questions: [
    {
      id: 'd2q1',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[1, 1], [1, 1]])
print(A + B)`,
      options: ['[[2 3] [4 5]]', '[[2 2] [4 4]]', '[[1 2] [3 4]]', '[[2 3] [3 4]]'],
      answerIndex: 0,
      explanation: 'Cộng từng phần tử: [[1+1, 2+1], [3+1, 4+1]] = [[2,3],[4,5]].',
    },
    {
      id: 'd2q2',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
print(A.T)`,
      options: ['[[1 2] [3 4]]', '[[1 3] [2 4]]', '[[4 3] [2 1]]', '[[2 1] [4 3]]'],
      answerIndex: 1,
      explanation: 'Chuyển vị đổi hàng và cột: [[1,3],[2,4]].',
    },
    {
      id: 'd2q3',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.dot(A, B)[0, 0])`,
      options: ['5', '19', '23', '50'],
      answerIndex: 1,
      explanation: 'np.dot(A,B) = [[19,22],[43,50]]. [0,0] = 19.',
    },
    {
      id: 'd2q4',
      type: 'output-prediction',
      topic: 'Ma trận nghịch đảo',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
A_inv = np.linalg.inv(A)
print(np.dot(A, A_inv))`,
      options: ['[[0 0] [0 0]]', '[[1 0] [0 1]]', '[[1 2] [3 4]]', '[[2 0] [0 2]]'],
      answerIndex: 1,
      explanation: 'A nhân với nghịch đảo của nó cho ma trận đơn vị [[1,0],[0,1]].',
    },
    {
      id: 'd2q5',
      type: 'multiple-choice',
      topic: 'Ma trận nghịch đảo',
      question: 'Những ma trận nào có thể có nghịch đảo?',
      options: ['Mọi ma trận', 'Chỉ ma trận vuông', 'Chỉ ma trận 2×2', 'Chỉ ma trận toàn số 1'],
      answerIndex: 1,
      explanation: 'Chỉ ma trận vuông (số hàng bằng số cột) mới có thể có nghịch đảo.',
    },
    {
      id: 'd2q6',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Shape của ma trận chuyển vị từ (2, 3) là gì?',
      options: ['(2, 3)', '(3, 2)', '(6,)', '(1, 6)'],
      answerIndex: 1,
      explanation: 'Chuyển vị đổi hàng và cột, nên (2,3) thành (3,2).',
    },
    {
      id: 'd2q7',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 0], [0, 1]])
print(np.dot(A, A))`,
      options: ['[[1 0] [0 1]]', '[[2 0] [0 2]]', '[[0 0] [0 0]]', '[[1 1] [1 1]]'],
      answerIndex: 0,
      explanation: 'Ma trận đơn vị nhân với chính nó vẫn là ma trận đơn vị.',
    },
    {
      id: 'd2q8',
      type: 'multiple-choice',
      topic: 'Ma trận',
      question: 'Phép nào cộng từng phần tử?',
      options: ['np.dot(A, B)', 'A + B', 'A @ B', 'Phép nhân ma trận'],
      answerIndex: 1,
      explanation: 'Phép cộng (+) cộng từng phần tử. np.dot và @ là phép nhân ma trận.',
    },
  ],
}
