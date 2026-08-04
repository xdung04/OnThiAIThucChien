export default {
  slug: 'day1-numpy-basics',
  title: 'NumPy cơ bản',
  subtitle: 'Array, shape, reshape, dtype, lập chỉ mục, cắt mảng và các hàm chính',
  module: 'Module B · Lập trình',
  time: '14 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Câu hỏi NumPy rất phổ biến. Hãy tập trung vào shape, lập chỉ mục và các hàm đơn giản như sum, mean, max, min, argmax.',
  quizId: 'day1-numpy-basics',
  objectives: [
    'Đọc code NumPy và dự đoán kết quả',
    'Hiểu shape và reshape của mảng',
    'Dùng lập chỉ mục, cắt mảng và các hàm thông dụng',
  ],
  whatIsIt: [
    'NumPy (np) là thư viện Python dùng để làm việc với mảng và toán học.',
    'Mảng (array) giống như một lưới các con số.',
    'Kỳ đánh giá kiểm tra khả năng đọc code NumPy và dự đoán kết quả.',
  ],
  whyImportant: [
    'NumPy được ưu tiên cao — nhiều thí sinh trước đây xác nhận.',
    'Các phép toán ma trận trong kỳ đánh giá thường được thực hiện qua NumPy.',
    'Đọc code np là kỹ năng cốt lõi của Module B.',
  ],
  keyConcepts: [
    'np.array() tạo mảng',
    'shape cho biết số chiều (hàng, cột)',
    'reshape thay đổi số chiều nhưng không đổi dữ liệu',
    'dtype là kiểu dữ liệu của các phần tử',
    'Lập chỉ mục bắt đầu từ 0: a[0]',
    'Cắt mảng: a[1:3] lấy phần tử 1 và 2',
    'Các hàm: sum, mean, max, min, argmax, dot',
  ],
  examples: [
    {
      code: `import numpy as np
a = np.array([1, 2, 3])
print(a)        # [1 2 3]
print(a.shape)  # (3,)`,
      note: 'Mảng 1 chiều. shape (3,) nghĩa là 3 phần tử trên một hàng.',
    },
    {
      code: `import numpy as np
a = np.array([[1, 2, 3], [4, 5, 6]])
print(a.shape)  # (2, 3)
print(a.dtype)  # int64`,
      note: '2 hàng, 3 cột. dtype cho biết kiểu phần tử.',
    },
    {
      code: `import numpy as np
a = np.array([1, 2, 3, 4, 5, 6])
b = a.reshape(2, 3)
print(b)
# [[1 2 3]
#  [4 5 6]]`,
      note: 'reshape(2, 3) biến 6 phần tử thành 2 hàng mỗi hàng 3 phần tử.',
    },
    {
      code: `import numpy as np
a = np.array([[1, 2, 3], [4, 5, 6]])
print(a[0, 1])   # 2  (hàng 0, cột 1)
print(a[1])      # [4 5 6]  (hàng 1)`,
      note: 'Lập chỉ mục: a[hàng, cột]. Hàng và cột bắt đầu từ 0.',
    },
    {
      code: `import numpy as np
a = np.array([10, 20, 30, 40, 50])
print(a[1:3])   # [20 30]  (chỉ số 1 và 2)`,
      note: 'Cắt a[1:3] lấy từ chỉ số 1 đến (không gồm) 3.',
    },
    {
      code: `import numpy as np
a = np.array([1, 2, 3, 4])
print(a.sum())    # 10
print(a.mean())   # 2.5
print(a.max())    # 4
print(a.min())    # 1
print(a.argmax()) # 3  (chỉ số của giá trị lớn nhất)`,
      note: 'sum, mean, max, min trả về giá trị. argmax trả về CHỈ SỐ của giá trị lớn nhất.',
    },
    {
      code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.dot(a, b))  # 32`,
      note: 'dot = 1*4 + 2*5 + 3*6 = 32. Đây là tích vô hướng.',
    },
    {
      code: `import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a.T)
# [[1 3]
#  [2 4]]`,
      note: '.T chuyển vị: hàng thành cột.',
    },
  ],
  assessmentQs: [
    'Shape của mảng đã cho là gì?',
    'reshape làm gì?',
    'Kết quả của a[0, 1] là gì?',
    'argmax trả về giá trị hay chỉ số?',
    'Kết quả của np.dot là gì?',
  ],
  mistakes: [
    'Nhầm shape (2, 3) với (3, 2).',
    'Quên chỉ số bắt đầu từ 0.',
    'Nghĩ argmax trả về giá trị — thực ra nó trả về chỉ số.',
    'Cắt a[1:3] gồm chỉ số 1 và 2, không gồm 3.',
    'Quên rằng reshape phải giữ nguyên tổng số phần tử.',
  ],
  summary: [
    'np.array tạo mảng; shape cho biết số chiều.',
    'reshape thay đổi hình dạng nhưng giữ nguyên dữ liệu.',
    'Chỉ số bắt đầu từ 0; cắt mảng dùng start:end (end không gồm).',
    'sum, mean, max, min tính giá trị; argmax cho chỉ số.',
    'np.dot tính tích vô hướng.',
  ],
  cheatSheet: [
    { term: 'np.array([...])', def: 'tạo mảng 1 chiều' },
    { term: 'np.array([[..],[..]])', def: 'tạo mảng 2 chiều' },
    { term: 'a.shape', def: 'số chiều, ví dụ (2, 3)' },
    { term: 'a.reshape(r, c)', def: 'thay đổi hình dạng' },
    { term: 'a.dtype', def: 'kiểu dữ liệu phần tử' },
    { term: 'a.T', def: 'chuyển vị' },
    { term: 'a[0, 1]', def: 'hàng 0, cột 1' },
    { term: 'a[1:3]', def: 'chỉ số 1 đến 2' },
    { term: 'a.sum()', def: 'tổng tất cả phần tử' },
    { term: 'a.mean()', def: 'trung bình' },
    { term: 'a.max() / a.min()', def: 'lớn nhất / nhỏ nhất' },
    { term: 'a.argmax()', def: 'chỉ số của giá trị lớn nhất' },
    { term: 'np.dot(a, b)', def: 'tích vô hướng' },
  ],
}
