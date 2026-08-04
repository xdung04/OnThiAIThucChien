export default {
  id: 'day1',
  title: 'Kiểm tra nhanh Ngày 1',
  questions: [
    {
      id: 'd1q1',
      type: 'output-prediction',
      topic: 'Python cơ bản',
      question: 'Kết quả là gì?',
      code: `x = 10
y = 3
print(x % y)`,
      options: ['3', '1', '0', '3.33'],
      answerIndex: 1,
      explanation: '10 % 3 = 1 (phần dư).',
    },
    {
      id: 'd1q2',
      type: 'multiple-choice',
      topic: 'Python cơ bản',
      question: 'Tập hợp nào KHÔNG có thứ tự và chỉ chứa phần tử duy nhất?',
      options: ['list', 'tuple', 'set', 'dictionary'],
      answerIndex: 2,
      explanation: 'Set không có thứ tự và chỉ chứa phần tử duy nhất.',
    },
    {
      id: 'd1q3',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([1, 2, 3, 4])
print(a.shape)`,
      options: ['(4,)', '(1, 4)', '(4, 1)', '4'],
      answerIndex: 0,
      explanation: 'Mảng 1 chiều 4 phần tử có shape (4,).',
    },
    {
      id: 'd1q4',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a[0, 1])`,
      options: ['1', '2', '3', '4'],
      answerIndex: 1,
      explanation: 'a[0, 1] là hàng 0, cột 1 = 2.',
    },
    {
      id: 'd1q5',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([1, 2, 3, 4])
print(a.mean())`,
      options: ['2', '2.5', '3', '10'],
      answerIndex: 1,
      explanation: 'mean = (1+2+3+4)/4 = 2.5.',
    },
    {
      id: 'd1q6',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([3, 1, 4, 2])
print(a.argmax())`,
      options: ['4', '3', '2', '1'],
      answerIndex: 2,
      explanation: 'argmax trả về CHỈ SỐ của giá trị lớn nhất. Giá trị lớn nhất là 4 ở index 2.',
    },
    {
      id: 'd1q7',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.dot(a, b))`,
      options: ['32', '21', '15', '9'],
      answerIndex: 0,
      explanation: 'dot = 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32.',
    },
    {
      id: 'd1q8',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([[1, 2, 3], [4, 5, 6]])
print(a.shape)`,
      options: ['(2, 3)', '(3, 2)', '(6,)', '(2,)'],
      answerIndex: 0,
      explanation: '2 hàng và 3 cột → shape (2, 3).',
    },
  ],
}
