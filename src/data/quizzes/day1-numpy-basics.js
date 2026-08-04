export default {
  id: 'day1-numpy-basics',
  title: 'Quiz NumPy cơ bản',
  questions: [
    {
      id: 'np1',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a.shape)`,
      options: ['(2, 2)', '(4,)', '(1, 4)', '(2, 1)'],
      answerIndex: 0,
      explanation: '2 hàng và 2 cột → shape (2, 2).',
    },
    {
      id: 'np2',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([1, 2, 3, 4, 5, 6])
b = a.reshape(2, 3)
print(b[1, 2])`,
      options: ['3', '4', '5', '6'],
      answerIndex: 3,
      explanation: 'Sau reshape, b là [[1,2,3],[4,5,6]]. b[1,2] = 6.',
    },
    {
      id: 'np3',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([5, 2, 9, 1])
print(a.argmax())`,
      options: ['9', '2', '3', '1'],
      answerIndex: 1,
      explanation: 'argmax trả về CHỈ SỐ của giá trị lớn nhất. 9 ở index 2.',
    },
    {
      id: 'np4',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([10, 20, 30, 40])
print(a[1:3])`,
      options: ['[10 20]', '[20 30]', '[30 40]', '[20 30 40]'],
      answerIndex: 1,
      explanation: 'a[1:3] lấy chỉ số 1 và 2 → [20 30]. Chỉ số 3 bị loại.',
    },
    {
      id: 'np5',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a.T)`,
      options: ['[[1 2] [3 4]]', '[[1 3] [2 4]]', '[[4 3] [2 1]]', '[[2 1] [4 3]]'],
      answerIndex: 1,
      explanation: 'Chuyển vị đổi hàng và cột: [[1 3] [2 4]].',
    },
    {
      id: 'np6',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([2, 4, 6, 8])
print(a.sum())`,
      options: ['20', '24', '5', '8'],
      answerIndex: 0,
      explanation: 'sum = 2 + 4 + 6 + 8 = 20.',
    },
    {
      id: 'np7',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([1, 1, 1])
print(np.dot(a, b))`,
      options: ['6', '3', '1', '9'],
      answerIndex: 0,
      explanation: 'dot = 1*1 + 2*1 + 3*1 = 6.',
    },
    {
      id: 'np8',
      type: 'multiple-choice',
      topic: 'NumPy',
      question: 'a.dtype cho bạn biết điều gì?',
      options: ['Shape của mảng', 'Kiểu dữ liệu của các phần tử', 'Số chiều', 'Tổng số phần tử'],
      answerIndex: 1,
      explanation: 'dtype là kiểu dữ liệu của các phần tử, ví dụ int64 hoặc float64.',
    },
  ],
}
