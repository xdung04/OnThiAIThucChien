export default {
  slug: 'day2-vector-matrix',
  title: 'Vector & Ma trận',
  subtitle: 'Vector, ma trận, phép cộng, phép nhân và chuyển vị qua NumPy',
  module: 'Module A · Toán học',
  time: '14 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Câu hỏi ma trận thường được đưa dưới dạng code NumPy. Hãy học cách đọc np.dot, np.transpose và các shape của mảng.',
  quizId: 'day2-vector-matrix',
  objectives: [
    'Hiểu vector và ma trận là gì',
    'Đọc phép cộng và phép nhân ma trận trong NumPy',
    'Hiểu chuyển vị và các shape của ma trận',
  ],
  whatIsIt: [
    'Vector là một danh sách các số, như [1, 2, 3].',
    'Ma trận là một lưới các số có hàng và cột.',
    'Trong kỳ đánh giá, ma trận xuất hiện dưới dạng mảng NumPy.',
  ],
  whyImportant: [
    'Module A (Toán học) chiếm 25% kỳ đánh giá.',
    'Phép toán ma trận là chủ đề được xác nhận ưu tiên cao.',
    'Câu hỏi kiểm tra đọc code NumPy, không phải tính toán tay.',
  ],
  keyConcepts: [
    'Vector: mảng 1 chiều, ví dụ np.array([1, 2, 3])',
    'Ma trận: mảng 2 chiều, ví dụ np.array([[1, 2], [3, 4]])',
    'Phép cộng ma trận: cộng từng phần tử tương ứng (cùng shape)',
    'Phép nhân ma trận: np.dot hoặc @',
    'Chuyển vị: np.transpose hoặc .T đổi hàng thành cột',
    'Shape quan trọng: (2, 3) khác (3, 2)',
  ],
  examples: [
    {
      code: `import numpy as np
v = np.array([1, 2, 3])
print(v.shape)  # (3,)`,
      note: 'Vector là mảng 1 chiều.',
    },
    {
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
print(A.shape)  # (2, 2)`,
      note: 'Ma trận là mảng 2 chiều. 2 hàng, 2 cột.',
    },
    {
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(A + B)
# [[ 6  8]
#  [10 12]]`,
      note: 'Phép cộng cộng từng phần tử: 1+5, 2+6, 3+7, 4+8.',
    },
    {
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.dot(A, B))
# [[19 22]
#  [43 50]]`,
      note: 'Phép nhân ma trận KHÔNG phải cộng từng phần tử. Nó dùng hàng × cột.',
    },
    {
      code: `import numpy as np
A = np.array([[1, 2, 3], [4, 5, 6]])
print(A.T)
# [[1 4]
#  [2 5]
#  [3 6]]`,
      note: 'Chuyển vị biến hàng thành cột. Shape (2,3) thành (3,2).',
    },
    {
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
print(np.transpose(A))
# [[1 3]
#  [2 4]]`,
      note: 'np.transpose(A) giống như A.T.',
    },
  ],
  assessmentQs: [
    'Shape của ma trận đã cho là gì?',
    'Kết quả của A + B là gì?',
    'Kết quả của np.dot(A, B) là gì?',
    'Chuyển vị làm gì với ma trận?',
    'Phép nào cộng từng phần tử: + hay np.dot?',
  ],
  mistakes: [
    'Nghĩ np.dot là phép cộng từng phần tử — thực ra không phải.',
    'Nhầm shape (2, 3) với (3, 2).',
    'Quên rằng phép cộng đòi hỏi cùng shape.',
    'Nhầm chuyển vị với nghịch đảo.',
    'Quên rằng thứ tự nhân ma trận quan trọng (A·B ≠ B·A).',
  ],
  summary: [
    'Vector = mảng 1 chiều; ma trận = mảng 2 chiều.',
    'Phép cộng (+) cộng từng phần tử.',
    'np.dot là phép nhân ma trận (hàng × cột).',
    'Chuyển vị (.T) đổi hàng và cột.',
    'Luôn kiểm tra shape của kết quả.',
  ],
  cheatSheet: [
    { term: 'vector', def: 'mảng 1 chiều: np.array([1,2,3])' },
    { term: 'matrix', def: 'mảng 2 chiều: np.array([[1,2],[3,4]])' },
    { term: 'A + B', def: 'phép cộng từng phần tử' },
    { term: 'np.dot(A, B)', def: 'phép nhân ma trận' },
    { term: 'A.T / np.transpose(A)', def: 'đổi hàng và cột' },
    { term: 'shape', def: '(hàng, cột)' },
  ],
}
