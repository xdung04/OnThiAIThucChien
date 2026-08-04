export default {
  id: 'day3',
  title: 'Kiểm tra nhanh Ngày 3',
  questions: [
    {
      id: 'd3q1',
      type: 'output-prediction',
      topic: 'Trị riêng',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 0], [0, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues)`,
      options: ['[2. 3.]', '[3. 2.]', '[[2 0] [0 3]]', '[1. 1.]'],
      answerIndex: 0,
      explanation: 'eigenvalues là mảng 1 chiều các số: [2. 3.].',
    },
    {
      id: 'd3q2',
      type: 'multiple-choice',
      topic: 'Trị riêng',
      question: 'np.linalg.eig(A) trả về gì?',
      options: ['Chỉ trị riêng', 'Chỉ vector riêng', 'Cả trị riêng và vector riêng', 'Nghịch đảo của A'],
      answerIndex: 2,
      explanation: 'np.linalg.eig(A) trả về hai phần: trị riêng và vector riêng.',
    },
    {
      id: 'd3q3',
      type: 'output-prediction',
      topic: 'Thống kê',
      question: 'Trung bình của [2, 4, 6, 8] là gì?',
      options: ['4', '5', '6', '20'],
      answerIndex: 1,
      explanation: 'mean = (2+4+6+8)/4 = 20/4 = 5.',
    },
    {
      id: 'd3q4',
      type: 'output-prediction',
      topic: 'Thống kê',
      question: 'Trung vị của [1, 3, 5, 7, 9] là gì?',
      options: ['3', '5', '7', '25'],
      answerIndex: 1,
      explanation: 'Giá trị giữa của 5 số đã sắp xếp là giá trị thứ 3 = 5.',
    },
    {
      id: 'd3q5',
      type: 'multiple-choice',
      topic: 'Thống kê',
      question: 'Mode của [1, 2, 2, 3, 3, 3, 4] là gì?',
      options: ['2', '3', '4', '1'],
      answerIndex: 1,
      explanation: 'Số 3 xuất hiện nhiều nhất (3 lần), nên mode là 3.',
    },
    {
      id: 'd3q6',
      type: 'multiple-choice',
      topic: 'Thống kê',
      question: 'Đại lượng nào bị ảnh hưởng nhiều nhất bởi outlier?',
      options: ['Trung vị', 'Mode', 'Trung bình', 'Không cái nào'],
      answerIndex: 2,
      explanation: 'Trung bình bị kéo bởi giá trị cực đoan; trung vị bền vững hơn.',
    },
    {
      id: 'd3q7',
      type: 'output-prediction',
      topic: 'Thống kê',
      question: 'Kết quả là gì?',
      code: `import numpy as np
data = np.array([1, 2, 3, 4, 5])
print(data.std())`,
      options: ['2.0', '1.414', '3.0', '15.0'],
      answerIndex: 1,
      explanation: 'std là căn bậc hai của phương sai. Với 1..5, std ≈ 1.414.',
    },
    {
      id: 'd3q8',
      type: 'output-prediction',
      topic: 'Trị riêng',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 0], [0, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues[0])`,
      options: ['2.0', '3.0', '0.0', '1.0'],
      answerIndex: 0,
      explanation: 'eigenvalues[0] là trị riêng đầu tiên = 2.0.',
    },
  ],
}
