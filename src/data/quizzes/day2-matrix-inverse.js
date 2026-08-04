export default {
  id: 'day2-matrix-inverse',
  title: 'Quiz Ma trận nghịch đảo',
  questions: [
    {
      id: 'mi1',
      type: 'output-prediction',
      topic: 'Ma trận nghịch đảo',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 0], [0, 2]])
print(np.linalg.inv(A))`,
      options: ['[[0.5 0. ] [0.  0.5]]', '[[2 0] [0 2]]', '[[1 0] [0 1]]', '[[0 2] [2 0]]'],
      answerIndex: 0,
      explanation: 'Nghịch đảo của 2·ma trận đơn vị là 0.5·ma trận đơn vị: [[0.5,0],[0,0.5]].',
    },
    {
      id: 'mi2',
      type: 'multiple-choice',
      topic: 'Ma trận nghịch đảo',
      question: 'A · A⁻¹ bằng gì?',
      options: ['Ma trận không', 'Ma trận đơn vị', 'Chính A', 'Chính A⁻¹'],
      answerIndex: 1,
      explanation: 'A nhân với nghịch đảo của nó cho ma trận đơn vị.',
    },
    {
      id: 'mi3',
      type: 'output-prediction',
      topic: 'Ma trận nghịch đảo',
      question: 'Kết quả là gì?',
      code: `import numpy as np
I = np.eye(3)
print(I.shape)`,
      options: ['(3,)', '(3, 3)', '(1, 3)', '(9,)'],
      answerIndex: 1,
      explanation: 'np.eye(3) tạo ma trận đơn vị 3×3, shape (3,3).',
    },
    {
      id: 'mi4',
      type: 'multiple-choice',
      topic: 'Ma trận nghịch đảo',
      question: 'Ma trận KHÔNG có nghịch đảo được gọi là…',
      options: ['Chuyển vị', 'Suy biến (singular)', 'Đơn vị', 'Đối xứng'],
      answerIndex: 1,
      explanation: 'Ma trận không có nghịch đảo gọi là suy biến (singular).',
    },
    {
      id: 'mi5',
      type: 'output-prediction',
      topic: 'Ma trận nghịch đảo',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
A_inv = np.linalg.inv(A)
print(np.dot(A_inv, A)[0, 0])`,
      options: ['0', '1', '2', '4'],
      answerIndex: 1,
      explanation: 'A⁻¹ · A cũng là ma trận đơn vị, nên [0,0] = 1.',
    },
  ],
}
