export default {
  id: 'mock-exam-3',
  title: 'Đề thi thử 3',
  description: 'Đề luyện thi đầy đủ · 60 câu · 90 phút',
  timeMinutes: 90,
  questions: [
    // ===== Module A (15) — Toán & Tư duy định lượng =====
    {
      id: 'e3a1',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.dot(A, B)[0, 0])`,
      options: ['5', '19', '23', '50'],
      answerIndex: 1,
      explanation: 'np.dot(A,B) = [[19,22],[43,50]]. Phần tử [0,0] = 19.',
    },
    {
      id: 'e3a2',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Ma trận',
      question: 'Shape (hình dạng) của ma trận chuyển vị từ (2, 3) là gì?',
      options: ['(2, 3)', '(3, 2)', '(6,)', '(1, 6)'],
      answerIndex: 1,
      explanation: 'Chuyển vị đổi hàng và cột: (3, 2).',
    },
    {
      id: 'e3a3',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Thống kê',
      question: 'Doanh số (triệu) 5 ngày: [4, 5, 5, 6, 40]. Giá trị 40 là outlier; thống kê nào mô tả "tình hình điển hình" tốt nhất?',
      options: ['Trung bình cộng (12)', 'Trung vị (5)', 'Tổng (60)', 'Độ lệch chuẩn'],
      answerIndex: 1,
      explanation: 'Trung bình (12) bị kéo lên bởi outlier 40. Trung vị (5) bền vững hơn, phản ánh tốt hơn.',
    },
    {
      id: 'e3a4',
      module: 'A',
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
      id: 'e3a5',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Ma trận nghịch đảo',
      question: 'Ma trận nào dưới đây KHÔNG có nghịch đảo?',
      options: ['[[2, 0], [0, 3]]', '[[1, 2], [2, 4]]', '[[1, 0], [0, 1]]', '[[0, 1], [1, 0]]'],
      answerIndex: 1,
      explanation: 'det([[1,2],[2,4]]) = 1*4 − 2*2 = 0 → ma trận suy biến, không khả nghịch.',
    },
    {
      id: 'e3a6',
      module: 'A',
      type: 'output-prediction',
      topic: 'Vector',
      question: 'Kết quả là gì?',
      code: `import numpy as np
u = np.array([3, 4])
v = np.array([1, 2])
print(np.dot(u, v))`,
      options: ['11', '10', '12', '7'],
      answerIndex: 0,
      explanation: 'Tích vô hướng = 3*1 + 4*2 = 3 + 8 = 11.',
    },
    {
      id: 'e3a7',
      module: 'A',
      type: 'output-prediction',
      topic: 'Vector',
      question: 'Kết quả là gì?',
      code: `import numpy as np
scores = np.array([60, 80, 90, 70])
print((scores >= 80).sum())`,
      options: ['1', '2', '3', '4'],
      answerIndex: 1,
      explanation: 'Boolean mask scores >= 80 → [False, True, True, False]. sum() đếm số True = 2.',
    },
    {
      id: 'e3a8',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.dot(A, B)[1, 1])`,
      options: ['19', '22', '43', '50'],
      answerIndex: 3,
      explanation: 'np.dot(A,B) = [[19,22],[43,50]]. Phần tử [1,1] = 50.',
    },
    {
      id: 'e3a9',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[3, 1], [2, 4]])
print(np.linalg.det(A))`,
      options: ['10.0', '5.0', '14.0', '7.0'],
      answerIndex: 0,
      explanation: 'det = 3*4 − 1*2 = 12 − 2 = 10.',
    },
    {
      id: 'e3a10',
      module: 'A',
      type: 'output-prediction',
      topic: 'Trị riêng',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[4, 0], [0, 2]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues[0])`,
      options: ['4.0', '2.0', '0.0', '1.0'],
      answerIndex: 0,
      explanation: 'eigenvalues[0] là trị riêng đầu tiên = 4.0.',
    },
    {
      id: 'e3a11',
      module: 'A',
      type: 'output-prediction',
      topic: 'Vector',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([3, 4])
print(np.linalg.norm(a))`,
      options: ['5.0', '7.0', '12.0', '25.0'],
      answerIndex: 0,
      explanation: 'Chuẩn (độ dài) = √(3² + 4²) = √25 = 5.',
    },
    {
      id: 'e3a12',
      module: 'A',
      type: 'output-prediction',
      topic: 'Vector',
      question: 'Kết quả là gì?',
      code: `import numpy as np
scores = np.array([70, 85, 60, 95])
centered = scores - scores.mean()
print(round(centered[2], 1))`,
      options: ['-17.5', '7.5', '17.5', '0.0'],
      answerIndex: 0,
      explanation: 'mean = 77.5. centered[2] = 60 − 77.5 = −17.5.',
    },
    {
      id: 'e3a13',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
print(A.T[0, 1])`,
      options: ['2', '3', '1', '4'],
      answerIndex: 1,
      explanation: 'A.T = [[1,3],[2,4]]. Phần tử [0,1] = 3.',
    },
    {
      id: 'e3a14',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 1], [1, 3]])
b = np.array([5, 7])
print(round(np.linalg.solve(A, b)[1], 1))`,
      options: ['1.8', '2.2', '1.4', '2.6'],
      answerIndex: 0,
      explanation: 'Hệ 2x + y = 5; x + 3y = 7 → y = 5 − 2x thay vào: x + 3(5−2x) = 7 → x + 15 − 6x = 7 → −5x = −8 → x = 1.6, y = 5 − 3.2 = 1.8. In y = 1.8.',
    },
    {
      id: 'e3a15',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Thống kê',
      question: 'Một mô hình dự đoán giá nhà có các sai số (residual): [-3, 1, 2]. SSE (tổng bình phương sai số) là bao nhiêu?',
      options: ['6', '14', '5', '10'],
      answerIndex: 1,
      explanation: 'SSE = (−3)² + 1² + 2² = 9 + 1 + 4 = 14.',
    },
    // ===== Module B (21) — Lập trình & Xử lý dữ liệu =====
    {
      id: 'e3b1',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([5, 10, 15, 20])
print((a > 12).sum())`,
      options: ['1', '2', '3', '4'],
      answerIndex: 1,
      explanation: 'Boolean mask a > 12 → [False, False, True, True]. sum() đếm số True = 2.',
    },
    {
      id: 'e3b2',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `def classify(s):
    return "A" if s >= 90 else ("B" if s >= 70 else "C")

print(classify(85))`,
      options: ['A', 'B', 'C', 'AB'],
      answerIndex: 1,
      explanation: '85 >= 70 → "B". Không đạt 90 nên không phải A.',
    },
    {
      id: 'e3b3',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([2, 4, 6, 8])
b = a * 2 + 1
print(b)`,
      options: ['[5 9 13 17]', '[4 8 12 16]', '[3 5 7 9]', '[2 4 6 8]'],
      answerIndex: 0,
      explanation: 'Broadcast: mỗi phần tử nhân 2 cộng 1 → [2*2+1, 4*2+1, 6*2+1, 8*2+1] = [5 9 13 17].',
    },
    {
      id: 'e3b4',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([[1, 2, 3], [4, 5, 6]])
print(a.sum(axis=0))`,
      options: ['[5 7 9]', '[6 15]', '[1 2 3]', '[4 5 6]'],
      answerIndex: 0,
      explanation: 'axis=0 tổng theo CỘT: [1+4, 2+5, 3+6] = [5 7 9].',
    },
    {
      id: 'e3b5',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"dept": ["IT", "IT", "HR"], "salary": [1000, 1200, 800]})
print(df.groupby("dept")["salary"].mean())`,
      options: ['IT 1100, HR 800', 'IT 1200, HR 800', 'IT 1000, HR 800', 'IT 2200, HR 800'],
      answerIndex: 0,
      explanation: 'IT = (1000+1200)/2 = 1100; HR = 800.',
    },
    {
      id: 'e3b6',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"age": [25, 30, 22], "score": [70, 90, 60]})
print(df[(df["age"] > 24) & (df["score"] >= 80)].shape)`,
      options: ['(3, 2)', '(1, 2)', '(2, 2)', '(0, 2)'],
      answerIndex: 1,
      explanation: 'Điều kiện tuổi > 24 VÀ điểm >= 80: chỉ Lan (30, 90). Một hàng → (1, 2).',
    },
    {
      id: 'e3b7',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Minh", "Lan"], "dept": ["IT", "IT", "HR"]})
print(df.drop_duplicates().shape)`,
      options: ['(3, 2)', '(2, 2)', '(1, 2)', '(2, 1)'],
      answerIndex: 1,
      explanation: 'Hai hàng Minh trùng (cùng name, dept) → bỏ 1, còn 2 hàng.',
    },
    {
      id: 'e3b8',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `prices = [100, 250, 400]
print([p * 1.1 for p in prices if p >= 200])`,
      options: ['[275.0, 440.0]', '[110.0, 275.0, 440.0]', '[275, 440]', '[110, 275, 440]'],
      answerIndex: 0,
      explanation: 'Lọc giá >= 200 (250, 400) rồi nhân 1.1 → [275.0, 440.0].',
    },
    {
      id: 'e3b9',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `words = ["cat", "dog"]
print({w: len(w) for w in words})`,
      options: ["{'cat': 3, 'dog': 3}", "{'cat': 'cat', 'dog': 'dog'}", "{'cat': 1, 'dog': 1}", "['cat', 'dog']"],
      answerIndex: 0,
      explanation: 'Dict comprehension: từ là key, độ dài là value → cat:3, dog:3.',
    },
    {
      id: 'e3b10',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
scores = np.array([[50, 80], [90, 60]])
print(scores.max(axis=1))`,
      options: ['[80 90]', '[50 90]', '[80 60]', '[90 80]'],
      answerIndex: 0,
      explanation: 'axis=1 max theo từng HÀNG: hàng 0 = 80, hàng 1 = 90 → [80 90].',
    },
    {
      id: 'e3b11',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
w = np.array([0.5, 0.3, 0.2])
s = np.array([8, 10, 6])
print(np.dot(w, s))`,
      options: ['8.2', '7.8', '8.0', '24'],
      answerIndex: 0,
      explanation: 'Điểm có trọng số = 0.5*8 + 0.3*10 + 0.2*6 = 4 + 3 + 1.2 = 8.2.',
    },

    {
      id: 'e3b12',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
a = pd.DataFrame({"id": [1, 2], "name": ["Minh", "Lan"]})
b = pd.DataFrame({"id": [1, 2], "salary": [500, 700]})
print(pd.merge(a, b, on="id").shape)`,
      options: ['(2, 3)', '(2, 4)', '(4, 2)', '(4, 4)'],
      answerIndex: 0,
      explanation: 'merge theo id khớp 2 bảng, cộng cột → 2 hàng, 3 cột: (2, 3).',
    },
    {
      id: 'e3b13',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"x": [1, None, 3], "y": [5, 6, None]})
print(df.isna().sum().sum())`,
      options: ['1', '2', '3', '0'],
      answerIndex: 1,
      explanation: 'Có 2 giá trị thiếu: None ở cột x và cột y → tổng = 2.',
    },
    {
      id: 'e3b14',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `names = ["Minh", "Lan", "Huy"]
print([n.upper() for n in names if len(n) == 3])`,
      options: ["['LAN', 'HUY']", "['MINH', 'LAN', 'HUY']", "['Minh', 'Lan', 'Huy']", "['MINH']"],
      answerIndex: 0,
      explanation: 'Lọc tên 3 ký tự (Lan, Huy) rồi viết hoa → ["LAN", "HUY"].',
    },
    {
      id: 'e3b15',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([1, 2, 3, 4])
b = a[::-1]
print(b)`,
      options: ['[4 3 2 1]', '[1 2 3 4]', '[1 4]', '[2 3]'],
      answerIndex: 0,
      explanation: 'a[::-1] bước nhảy âm → đảo ngược mảng → [4 3 2 1].',
    },
    {
      id: 'e3b16',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
X = np.array([[1, 2], [3, 4]])
w = np.array([2, 1])
print(np.dot(X, w))`,
      options: ['[4 10]', '[5 11]', '[4 11]', '[3 7]'],
      answerIndex: 0,
      explanation: 'np.dot(X,w) = [1*2+2*1, 3*2+4*1] = [4, 10].',
    },
    {
      id: 'e3b17',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
scores = np.array([55, 82, 91, 64])
print(np.where(scores >= 80, 1, 0))`,
      options: ['[0 1 1 0]', '[1 1 1 1]', '[0 0 1 0]', '[1 0 0 1]'],
      answerIndex: 0,
      explanation: 'np.where(>=80, 1, 0): 55→0, 82→1, 91→1, 64→0 → [0 1 1 0].',
    },
    {
      id: 'e3b18',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Lan", "Minh", "Huy"], "age": [30, 25, 22]})
print(df.sort_values("age").iloc[0]["name"])`,
      options: ['Lan', 'Minh', 'Huy', 'Error'],
      answerIndex: 2,
      explanation: 'Sắp tuổi tăng dần: 22 (Huy) đứng đầu.',
    },
    {
      id: 'e3b19',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"city": ["HN", "HCM", "HN", "DN"]})
print(df["city"].value_counts().iloc[0])`,
      options: ['HN', 'HCM', '1', '2'],
      answerIndex: 3,
      explanation: 'value_counts xếp giảm dần theo số lần, HN đứng đầu với 2 lần → 2.',
    },
    {
      id: 'e3b20',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"x": [1, None, 3]})
print(df["x"].fillna(0).sum())`,
      options: ['1', '4', '5', '0'],
      answerIndex: 1,
      explanation: 'fillna(0) thay None bằng 0 → 1+0+3 = 4.',
    },
    {
      id: 'e3b21',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"dept": ["IT", "IT", "HR"], "salary": [1000, 1200, 800]})
print(df.groupby("dept")["salary"].max())`,
      options: ['IT 1200, HR 800', 'IT 1000, HR 800', 'IT 2200, HR 800', 'IT 1200, HR 400'],
      answerIndex: 0,
      explanation: 'max theo dept: IT = max(1000, 1200) = 1200; HR = 800.',
    },

    // ===== Module C (15) — AI Knowledge & Product Thinking =====
    {
      id: 'e3c1',
      module: 'C',
      type: 'multiple-choice',
      topic: 'AI vs ML vs DL',
      question: 'Khái niệm nào rộng nhất trong các khái niệm sau?',
      options: ['Deep Learning', 'Machine Learning', 'AI', 'Neural Network'],
      answerIndex: 2,
      explanation: 'AI là khái niệm rộng nhất; ML, DL đều là tập con.',
    },
    {
      id: 'e3c2',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'Cho b₀ = -1, b₁ = 4, x = 3. Giá trị dự đoán ŷ = b₀ + b₁x là bao nhiêu?',
      options: ['11', '12', '10', '13'],
      answerIndex: 0,
      explanation: 'ŷ = -1 + 4*3 = -1 + 12 = 11.',
    },
    {
      id: 'e3c3',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'Một điểm có y = 5 và ŷ = 8. Residual e = y − ŷ bằng bao nhiêu?',
      options: ['3', '-3', '13', '0'],
      answerIndex: 1,
      explanation: 'e = 5 − 8 = -3.',
    },
    {
      id: 'e3c4',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'Các residual là [0, -2, 2]. SSE (Σ e²) bằng bao nhiêu?',
      options: ['0', '4', '8', '5'],
      answerIndex: 2,
      explanation: 'SSE = 0 + 4 + 4 = 8.',
    },
    {
      id: 'e3c5',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'SSE = 20 và n = 5 điểm. MSE bằng bao nhiêu?',
      options: ['4', '5', '100', '15'],
      answerIndex: 0,
      explanation: 'MSE = SSE / n = 20 / 5 = 4.',
    },
    {
      id: 'e3c6',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy tuyến tính',
      question: 'Mô hình A có R² = 0.99, mô hình B có R² = 0.5. Mô hình nào tốt hơn?',
      options: ['Mô hình A', 'Mô hình B', 'Bằng nhau', 'Không so sánh được'],
      answerIndex: 0,
      explanation: 'R² càng gần 1 càng tốt, nên mô hình A (0.99) tốt hơn.',
    },
    {
      id: 'e3c7',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy logistic',
      question: 'Cho b₀ = 5, b₁ = -2, x = 1. Điểm tuyến tính z = b₀ + b₁x bằng bao nhiêu?',
      options: ['3', '7', '-3', '5'],
      answerIndex: 0,
      explanation: 'z = 5 + (-2)*1 = 5 − 2 = 3.',
    },
    {
      id: 'e3c8',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy logistic',
      question: 'σ(0) (sigmoid tại z = 0) bằng bao nhiêu?',
      options: ['0', '0.5', '1', 'Không xác định'],
      answerIndex: 1,
      explanation: 'σ(0) = 1 / (1 + e⁰) = 0.5.',
    },
    {
      id: 'e3c9',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy logistic',
      question: 'Xác suất P = 0.6, ngưỡng (threshold) = 0.5. Class dự đoán là gì?',
      options: ['Nhãn 1', 'Nhãn 0', 'Không xác định', '0.6'],
      answerIndex: 0,
      explanation: 'So P với threshold: 0.6 >= 0.5 → Class 1.',
    },
    {
      id: 'e3c10',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Đạo hàm',
      question: 'Đạo hàm của x² là gì?',
      options: ['x', '2x', 'x²', '2'],
      answerIndex: 1,
      explanation: 'd/dx (x²) = 2x.',
    },
    {
      id: 'e3c11',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Đạo hàm',
      question: 'Nếu gradient tại một điểm là âm, hàm đang…?',
      options: ['Tăng', 'Giảm', 'Đứng yên', 'Bằng 0'],
      answerIndex: 1,
      explanation: 'Gradient âm → độ dốc âm → hàm đang giảm.',
    },
    {
      id: 'e3c12',
      module: 'C',
      type: 'output-prediction',
      topic: 'Gradient Descent',
      question: 'Cho θ = 6, α = 0.5, gradient = 2. θ_new = θ − α·gradient bằng bao nhiêu?',
      options: ['5', '7', '4', '6.1'],
      answerIndex: 0,
      explanation: 'θ_new = 6 − 0.5*2 = 6 − 1 = 5.',
    },
    {
      id: 'e3c13',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Gradient Descent',
      question: 'Mục tiêu của gradient descent là gì?',
      options: ['Tối đa hóa cost', 'Tối thiểu hóa cost (loss)', 'Tăng learning rate', 'Tăng số bước'],
      answerIndex: 1,
      explanation: 'Gradient descent tối thiểu hóa hàm cost/loss.',
    },
    {
      id: 'e3c14',
      module: 'C',
      type: 'output-prediction',
      topic: 'K-Means',
      question: 'Cụm gồm các điểm (2, 2), (4, 2), (6, 2). Centroid mới của cụm là gì?',
      options: ['(4, 2)', '(2, 4)', '(6, 2)', '(3, 3)'],
      answerIndex: 0,
      explanation: 'centroid = ((2+4+6)/3, (2+2+2)/3) = (12/3, 6/3) = (4, 2).',
    },
    {
      id: 'e3c15',
      module: 'C',
      type: 'multiple-choice',
      topic: 'MVP',
      question: 'Mục đích chính của MVP là gì?',
      options: ['Xây sản phẩm hoàn chỉnh', 'Kiểm thử ý tưởng cốt lõi nhanh và rẻ', 'Kiếm tiền ngay', 'Thêm nhiều tính năng'],
      answerIndex: 1,
      explanation: 'MVP dùng để kiểm thử ý tưởng cốt lõi nhanh và rẻ.',
    },

    // ===== Module D (9) — Logic, Ethics & AI Behavior =====
    {
      id: 'e3d1',
      module: 'D',
      type: 'output-prediction',
      topic: 'Logic',
      question: 'Số tiếp theo của dãy 3, 6, 9, 12, ? là gì?',
      options: ['13', '14', '15', '18'],
      answerIndex: 2,
      explanation: 'Quy luật cộng 3. 12 + 3 = 15.',
    },
    {
      id: 'e3d2',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Đạo đức AI',
      question: 'Responsible AI (AI có trách nhiệm) có nghĩa là gì?',
      options: ['AI chạy nhanh', 'AI công bằng, an toàn và minh bạch', 'AI đắt tiền', 'AI không bao giờ sai'],
      answerIndex: 1,
      explanation: 'Responsible AI là công bằng, an toàn, minh bạch và chịu trách nhiệm.',
    },
    {
      id: 'e3d3',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Ứng xử',
      question: 'Cách tiếp cận giải quyết vấn đề tốt là gì?',
      options: ['Giải quyết mọi thứ cùng lúc', 'Chia vấn đề thành các phần nhỏ', 'Bỏ qua vấn đề', 'Luôn tự làm một mình'],
      answerIndex: 1,
      explanation: 'Chia nhỏ vấn đề giúp việc giải quyết dễ dàng hơn.',
    },
    {
      id: 'e3d4',
      module: 'D',
      type: 'output-prediction',
      topic: 'Logic',
      question: 'Số tiếp theo của dãy 7, 5, 3, 1, ? là gì?',
      options: ['0', '-1', '2', '1'],
      answerIndex: 1,
      explanation: 'Quy luật trừ 2. 1 - 2 = -1.',
    },
    {
      id: 'e3d5',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Đạo đức AI',
      question: 'Vì sao quyền riêng tư (privacy) quan trọng trong AI?',
      options: ['Giúp AI nhanh hơn', 'Bảo vệ dữ liệu cá nhân của người dùng', 'Giúp AI rẻ hơn', 'Không quan trọng'],
      answerIndex: 1,
      explanation: 'Quyền riêng tư bảo vệ dữ liệu cá nhân khỏi bị lạm dụng.',
    },
    {
      id: 'e3d6',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Ứng xử',
      question: 'Đồng đội đang bí một công việc. Ứng xử tốt nhất là gì?',
      options: ['Tự làm một mình', 'Đề nghị giúp và giải thích cách làm', 'Đổ lỗi', 'Bỏ qua'],
      answerIndex: 1,
      explanation: 'Làm việc nhóm tốt là đề nghị giúp đỡ và hợp tác.',
    },
    {
      id: 'e3d7',
      module: 'D',
      type: 'output-prediction',
      topic: 'Logic',
      question: 'Số tiếp theo của dãy 1, 3, 6, 10, ? là gì?',
      options: ['13', '14', '15', '16'],
      answerIndex: 2,
      explanation: 'Quy luật cộng dần 2,3,4,5 → 10 + 5 = 15.',
    },
    {
      id: 'e3d8',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Đạo đức AI',
      question: 'AI tự tin đưa ra thông tin sai được gọi là gì?',
      options: ['Bias', 'Hallucination', 'Overfitting', 'Underfitting'],
      answerIndex: 1,
      explanation: 'Hallucination là AI tự tin bịa ra thông tin sai.',
    },
    {
      id: 'e3d9',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Ứng xử',
      question: 'Bạn không thể tự giải quyết một vấn đề. Bạn nên làm gì?',
      options: ['Bỏ cuộc', 'Nhờ đồng đội giúp', 'Đoán đại', 'Giấu vấn đề'],
      answerIndex: 1,
      explanation: 'Nhờ giúp đỡ là hành vi giải quyết vấn đề tốt.',
    },
  ],
}

