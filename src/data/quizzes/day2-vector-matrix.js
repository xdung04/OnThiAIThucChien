export default {
  id: 'day2-vector-matrix',
  title: 'Quiz Vector & Ma trận',
  questions: [
    {
      id: 'vm1',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[0, 1], [1, 0]])
print(A + B)`,
      options: ['[[1 3] [4 4]]', '[[1 2] [3 4]]', '[[0 1] [1 0]]', '[[1 1] [1 1]]'],
      answerIndex: 0,
      explanation: 'Cộng từng phần tử: [[1+0, 2+1], [3+1, 4+0]] = [[1,3],[4,4]].',
    },
    {
      id: 'vm2',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[1, 0], [0, 1]])
print(np.dot(A, B))`,
      options: ['[[1 2] [3 4]]', '[[1 0] [0 1]]', '[[2 1] [4 3]]', '[[0 0] [0 0]]'],
      answerIndex: 0,
      explanation: 'Nhân với ma trận đơn vị giữ nguyên A.',
    },
    {
      id: 'vm3',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2, 3], [4, 5, 6]])
print(A.T.shape)`,
      options: ['(2, 3)', '(3, 2)', '(6,)', '(1, 6)'],
      answerIndex: 1,
      explanation: 'Chuyển vị của (2,3) là (3,2).',
    },
    {
      id: 'vm4',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[2, 0], [0, 2]])
print(np.dot(A, B))`,
      options: ['[[2 4] [6 8]]', '[[1 2] [3 4]]', '[[2 0] [0 2]]', '[[3 2] [3 6]]'],
      answerIndex: 0,
      explanation: 'Nhân với 2·ma trận đơn vị nhân đôi mỗi phần tử: [[2,4],[6,8]].',
    },
    {
      id: 'vm5',
      type: 'multiple-choice',
      topic: 'Ma trận',
      question: 'Vector trong NumPy là gì?',
      options: ['Mảng 2 chiều', 'Mảng 1 chiều', 'Dictionary', 'Chuỗi'],
      answerIndex: 1,
      explanation: 'Vector là mảng 1 chiều, ví dụ np.array([1, 2, 3]).',
    },
    {
      id: 'vm6',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
print(np.transpose(A)[1, 0])`,
      options: ['2', '3', '1', '4'],
      answerIndex: 0,
      explanation: 'np.transpose(A) = [[1,3],[2,4]]. [1,0] = 2.',
    },
  ],
}
