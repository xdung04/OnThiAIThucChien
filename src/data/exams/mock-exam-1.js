export default {
  id: 'mock-exam-1',
  title: 'Đề thi thử 1',
  description: 'Đề luyện thi đầy đủ · 60 câu · 90 phút',
  timeMinutes: 90,
  questions: [
    // ===== Module A (15) — Toán & Tư duy định lượng =====
    {
      id: 'e1a1',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[0, 1], [1, 0]])
print(np.dot(A, B))`,
      options: ['[[2 1] [4 3]]', '[[1 2] [3 4]]', '[[0 1] [1 0]]', '[[3 4] [1 2]]'],
      answerIndex: 0,
      explanation: 'np.dot: [[1*0+2*1, 1*1+2*0], [3*0+4*1, 3*1+4*0]] = [[2,1],[4,3]]. B là ma trận hoán vị cột.',
    },
    {
      id: 'e1a2',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2, 3], [4, 5, 6]])
print(A.T.shape)`,
      options: ['(2, 3)', '(3, 2)', '(6,)', '(1, 6)'],
      answerIndex: 1,
      explanation: 'Chuyển vị của ma trận (2,3) là (3,2).',
    },
    {
      id: 'e1a3',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Thống kê',
      question: 'Bảng điểm của 3 môn: môn 1 hệ số 1 (điểm 7), môn 2 hệ số 2 (điểm 8), môn 3 hệ số 3 (điểm 9). Điểm trung bình có trọng số là bao nhiêu?',
      options: ['8.0', '8.3', '8.5', '8.67'],
      answerIndex: 1,
      explanation: 'TB = (7*1 + 8*2 + 9*3) / (1+2+3) = (7+16+27)/6 = 50/6 ≈ 8.3.',
    },
    {
      id: 'e1a4',
      module: 'A',
      type: 'output-prediction',
      topic: 'Trị riêng',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 0], [0, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues[1])`,
      options: ['2.0', '3.0', '0.0', '1.0'],
      answerIndex: 1,
      explanation: 'eigenvalues[1] là trị riêng thứ hai = 3.0.',
    },
    {
      id: 'e1a5',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Ma trận nghịch đảo',
      question: 'Ma trận nào dưới đây KHÔNG có nghịch đảo (không khả nghịch)?',
      options: ['[[2, 0], [0, 3]]', '[[1, 2], [2, 4]]', '[[1, 0], [0, 1]]', '[[0, 1], [1, 0]]'],
      answerIndex: 1,
      explanation: 'det([[1,2],[2,4]]) = 1*4 − 2*2 = 0 → ma trận suy biến, không khả nghịch.',
    },
    {
      id: 'e1a6',
      module: 'A',
      type: 'output-prediction',
      topic: 'Vector',
      question: 'Kết quả là gì?',
      code: `import numpy as np
u = np.array([1, 2, 3])
v = np.array([4, 5, 6])
print(np.dot(u, v))`,
      options: ['32', '24', '15', '21'],
      answerIndex: 0,
      explanation: 'Tích vô hướng = 1*4 + 2*5 + 3*6 = 4+10+18 = 32.',
    },
    {
      id: 'e1a7',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Thống kê',
      question: 'Một bộ dữ liệu có các giá trị [10, 12, 12, 13, 18]. Giá trị khác biệt (outlier) 18 bị ảnh hưởng đến thống kê nào nhiều nhất?',
      options: ['Trung vị bị kéo tăng mạnh', 'Trung bình cộng bị kéo tăng', 'Mode bị thay đổi hoàn toàn', 'Không ảnh hưởng thống kê nào'],
      answerIndex: 1,
      explanation: 'Trung bình cộng nhạy cảm với outlier (kéo lên). Trung vị và mode bền vững hơn với giá trị ngoại lai.',
    },
    {
      id: 'e1a8',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.dot(A, B)[1, 0])`,
      options: ['19', '22', '43', '50'],
      answerIndex: 2,
      explanation: 'np.dot(A,B) = [[19,22],[43,50]]. Phần tử [1,0] = 43.',
    },
    {
      id: 'e1a9',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận nghịch đảo',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 0], [0, 2]])
print(np.linalg.inv(A))`,
      options: ['[[0.5 0. ] [0.  0.5]]', '[[2 0] [0 2]]', '[[1 0] [0 1]]', '[[0 2] [2 0]]'],
      answerIndex: 0,
      explanation: 'Nghịch đảo của 2·ma trận đơn vị là 0.5·ma trận đơn vị.',
    },
    {
      id: 'e1a10',
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
      id: 'e1a11',
      module: 'A',
      type: 'output-prediction',
      topic: 'Vector',
      question: 'Kết quả là gì?',
      code: `import numpy as np
scores = np.array([70, 85, 60, 95])
centered = scores - scores.mean()
print(round(centered[1], 1))`,
      options: ['7.5', '15.0', '-17.5', '0.0'],
      answerIndex: 0,
      explanation: 'mean = (70+85+60+95)/4 = 77.5. centered[1] = 85 − 77.5 = 7.5.',
    },
    {
      id: 'e1a12',
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
      id: 'e1a13',
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
      id: 'e1a14',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
print(A.T[1, 0])`,
      options: ['2', '3', '1', '4'],
      answerIndex: 0,
      explanation: 'A.T = [[1,3],[2,4]]. Phần tử [1,0] = 2.',
    },
    {
      id: 'e1a15',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 1], [1, 3]])
b = np.array([5, 7])
print(np.linalg.solve(A, b)[0])`,
      options: ['1.6', '1.8', '2.0', '2.4'],
      answerIndex: 0,
      explanation: 'Giải hệ 2x + y = 5; x + 3y = 7 → từ y = 5 − 2x thay vào: x + 3(5−2x) = 7 → x + 15 − 6x = 7 → −5x = −8 → x = 1.6.',
    },
    // ===== Module B (21) — Lập trình & Xử lý dữ liệu =====
    {
      id: 'e1b1',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([5, 10, 15, 20])
count = (a > 12).sum()
print(count)`,
      options: ['1', '2', '3', '4'],
      answerIndex: 1,
      explanation: 'Boolean mask a > 12 → [False, False, True, True]. sum() đếm số True = 2.',
    },
    {
      id: 'e1b2',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a.sum(axis=0))`,
      options: ['[4 6]', '[3 7]', '[2 6]', '[1 2 3 4]'],
      answerIndex: 0,
      explanation: 'axis=0 tính tổng theo từng CỘT: cột 0 = 1+3 = 4, cột 1 = 2+4 = 6 → [4 6].',
    },
    {
      id: 'e1b3',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
scores = np.array([60, 85, 70, 95])
print(np.where(scores >= 80, "Gioi", "Dat"))`,
      options: ["['Dat' 'Gioi' 'Dat' 'Gioi']", "['Dat' 'Dat' 'Dat' 'Dat']", "['Gioi' 'Gioi' 'Gioi' 'Gioi']", "['Dat' 'Gioi' 'Gioi' 'Gioi']"],
      answerIndex: 0,
      explanation: 'np.where(điều kiện, giá trị đúng, giá trị sai): 60→Dat, 85→Gioi, 70→Dat, 95→Gioi.',
    },
    {
      id: 'e1b4',
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
      explanation: 'Điểm trung bình có trọng số = 0.5*8 + 0.3*10 + 0.2*6 = 4 + 3 + 1.2 = 8.2.',
    },
    {
      id: 'e1b5',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"dept": ["IT", "Sales", "IT", "Sales"], "salary": [1000, 800, 1200, 900]})
print(df.groupby("dept")["salary"].mean())`,
      options: ['IT 1100, Sales 850', 'IT 2200, Sales 1700', 'IT 1000, Sales 800', 'IT 1200, Sales 900'],
      answerIndex: 0,
      explanation: 'IT = (1000+1200)/2 = 1100. Sales = (800+900)/2 = 850.',
    },
    {
      id: 'e1b6',
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
      explanation: 'merge theo cột id khớp 2 bảng, cộng cột → 2 hàng, 3 cột: (2, 3).',
    },
    {
      id: 'e1b7',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"age": [25, 30, 22], "score": [70, 90, 60]})
print(df[(df["age"] > 24) & (df["score"] >= 80)].shape)`,
      options: ['(3, 2)', '(1, 2)', '(2, 2)', '(0, 2)'],
      answerIndex: 1,
      explanation: 'Điều kiện tuổi > 24 VÀ điểm >= 80: chỉ có Lan (30, 90). Một hàng → (1, 2).',
    },
    {
      id: 'e1b8',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `names = ["Minh", "Lan", "Huy"]
print([n.upper() for n in names if len(n) == 3])`,
      options: ["['MINH', 'LAN', 'HUY']", "['LAN', 'HUY']", "['MINH']", "['Lan', 'Huy']"],
      answerIndex: 1,
      explanation: 'List comprehension lọc tên có 3 ký tự (Lan, Huy) rồi viết hoa → ["LAN", "HUY"].',
    },
    {
      id: 'e1b9',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `prices = [100, 250, 400]
taxed = [p * 1.1 for p in prices if p >= 200]
print(taxed)`,
      options: ['[275.0, 440.0]', '[110.0, 275.0, 440.0]', '[275, 440]', '[110, 275, 440]'],
      answerIndex: 0,
      explanation: 'Lọc giá >= 200 (250, 400) rồi nhân 1.1 → [275.0, 440.0].',
    },
    {
      id: 'e1b10',
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
      explanation: 'Broadcast: mỗi phần tử nhân 2 rồi cộng 1 → [2*2+1, 4*2+1, 6*2+1, 8*2+1] = [5 9 13 17].',
    },
    {
      id: 'e1b11',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([[1, 2, 3], [4, 5, 6]])
print(a.reshape(3, 2).tolist())`,
      options: ['[[1, 2], [3, 4], [5, 6]]', '[[1, 2, 3], [4, 5, 6]]', '[[1, 4], [2, 5], [3, 6]]', '[[1, 2], [4, 5]]'],
      answerIndex: 0,
      explanation: 'reshape(3,2) xếp lại theo hàng ưu tiên: [[1,2],[3,4],[5,6]].',
    },
    {
      id: 'e1b12',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"dept": ["IT", "IT", "Sales"], "salary": [1000, 1200, 900]})
print(df.groupby("dept")["salary"].max())`,
      options: ['IT 1200, Sales 900', 'IT 2200, Sales 900', 'IT 1000, Sales 900', 'IT 1200, Sales 1000'],
      answerIndex: 0,
      explanation: 'groupby dept lấy max: IT = max(1000,1200) = 1200; Sales = 900.',
    },
    {
      id: 'e1b13',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Minh", "Lan"], "dept": ["IT", "IT", "Sales"]})
print(df.drop_duplicates().shape)`,
      options: ['(3, 2)', '(2, 2)', '(1, 2)', '(2, 1)'],
      answerIndex: 1,
      explanation: 'Hai hàng Minh đều trùng (cùng name, dept) → bỏ 1, còn 2 hàng.',
    },
    {
      id: 'e1b14',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `words = ["cat", "dog"]
print({w: len(w) for w in words})`,
      options: ["{'cat': 3, 'dog': 3}", "{'cat': 'cat', 'dog': 'dog'}", "{'cat': 1, 'dog': 1}", "['cat', 'dog']"],
      answerIndex: 0,
      explanation: 'Dict comprehension: mỗi từ là key, độ dài là value → cat:3, dog:3.',
    },
    {
      id: 'e1b15',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `def classify(score):
    return "Pass" if score >= 60 else "Fail"

print(classify(85), classify(40))`,
      options: ['Pass Fail', 'Fail Pass', 'Pass Pass', 'Fail Fail'],
      answerIndex: 0,
      explanation: '85 >= 60 → Pass; 40 < 60 → Fail. Kết quả: Pass Fail.',
    },
    {
      id: 'e1b16',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
scores = np.array([[50, 80], [90, 60]])
print(scores.max(axis=1))`,
      options: ['[80 90]', '[50 90]', '[80 60]', '[90 80]'],
      answerIndex: 0,
      explanation: 'axis=1 lấy max theo từng HÀNG: hàng 0 max = 80, hàng 1 max = 90 → [80 90].',
    },
    {
      id: 'e1b17',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([2, 4, 8])
b = np.array([10, 12, 14])
print(b - a)`,
      options: ['[8 8 6]', '[12 16 22]', '[8 10 8]', '[5 3 1.75]'],
      answerIndex: 0,
      explanation: 'Residual = b − a = [10-2, 12-4, 14-8] = [8, 8, 6].',
    },
    {
      id: 'e1b18',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "score": [70, 90, 60]})
print(df.sort_values("score", ascending=False).iloc[0]["name"])`,
      options: ['Minh', 'Lan', 'Huy', 'Error'],
      answerIndex: 1,
      explanation: 'Sắp xếp điểm giảm dần: 90 (Lan) đứng đầu → tên "Lan".',
    },
    {
      id: 'e1b19',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"x": [1, None, 3], "y": [5, 6, None]})
print(df.isna().sum().sum())`,
      options: ['1', '2', '3', '0'],
      answerIndex: 1,
      explanation: 'Có 2 giá trị thiếu: None ở cột x (hàng 1) và cột y (hàng 2) → 2.',
    },
    {
      id: 'e1b20',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"city": ["HN", "HCM", "DN"], "sales": [30, 40, 50]})
print(df["sales"].sum())`,
      options: ['90', '120', '100', '30'],
      answerIndex: 0,
      explanation: 'Tổng doanh thu = 30 + 40 + 50 = 120.',
    },
    {
      id: 'e1b21',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"score": [70, 85, 60, 95]})
print(df["score"].quantile(0.5))`,
      options: ['75.0', '77.5', '70.0', '85.0'],
      answerIndex: 1,
      explanation: 'quantile(0.5) là trung vị của [60,70,85,95] = (70+85)/2 = 77.5.',
    },

    // ===== Module C (15) — AI Knowledge & Product Thinking =====
    {
      id: 'e1c1',
      module: 'C',
      type: 'multiple-choice',
      topic: 'AI vs ML vs DL',
      question: 'Khái niệm nào rộng nhất?',
      options: ['Học sâu (Deep Learning)', 'Học máy (Machine Learning)', 'AI', 'Khoa học dữ liệu'],
      answerIndex: 2,
      explanation: 'AI là khái niệm rộng nhất; ML và DL là tập con của nó.',
    },
    {
      id: 'e1c2',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy tuyến tính',
      question: 'Hồi quy tuyến tính dự đoán điều gì?',
      options: ['Một nhãn (category)', 'Một số liên tục', 'Một xác suất', 'Một ma trận'],
      answerIndex: 1,
      explanation: 'Hồi quy tuyến tính dự đoán một số liên tục.',
    },
    {
      id: 'e1c3',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'Cho b₀ = 2, b₁ = 3, x = 4. Giá trị dự đoán ŷ = b₀ + b₁x là bao nhiêu?',
      options: ['12', '14', '9', '24'],
      answerIndex: 1,
      explanation: 'ŷ = 2 + 3*4 = 2 + 12 = 14.',
    },
    {
      id: 'e1c4',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'Một điểm có y = 9 và ŷ = 12. Residual e = y − ŷ bằng bao nhiêu?',
      options: ['3', '-3', '21', '0'],
      answerIndex: 1,
      explanation: 'e = 9 − 12 = -3.',
    },
    {
      id: 'e1c5',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'Các residual là [1, -2, 3]. SSE (Σ e²) bằng bao nhiêu?',
      options: ['6', '14', '5', '4'],
      answerIndex: 1,
      explanation: 'SSE = 1² + (-2)² + 3² = 1 + 4 + 9 = 14.',
    },
    {
      id: 'e1c6',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'SSE = 12 và n = 3 điểm. MSE bằng bao nhiêu?',
      options: ['4', '36', '3', '6'],
      answerIndex: 0,
      explanation: 'MSE = SSE / n = 12 / 3 = 4.',
    },
    {
      id: 'e1c7',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy tuyến tính',
      question: 'Mô hình A có R² = 0.9, mô hình B có R² = 0.6. Mô hình nào khớp dữ liệu tốt hơn?',
      options: ['Mô hình A', 'Mô hình B', 'Bằng nhau', 'Không so sánh được'],
      answerIndex: 0,
      explanation: 'R² càng gần 1 càng tốt, nên mô hình A (0.9) tốt hơn.',
    },
    {
      id: 'e1c8',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy logistic',
      question: 'Cho b₀ = -1, b₁ = 2, x = 2. Điểm tuyến tính z = b₀ + b₁x bằng bao nhiêu?',
      options: ['1', '3', '5', '-1'],
      answerIndex: 1,
      explanation: 'z = -1 + 2*2 = -1 + 4 = 3.',
    },
    {
      id: 'e1c9',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy logistic',
      question: 'σ(0) (sigmoid tại z = 0) bằng bao nhiêu?',
      options: ['0', '0.5', '1', 'Không xác định'],
      answerIndex: 1,
      explanation: 'σ(0) = 1 / (1 + e⁰) = 1 / 2 = 0.5.',
    },
    {
      id: 'e1c10',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy logistic',
      question: 'Xác suất P = 0.7, ngưỡng (threshold) = 0.8. Class dự đoán là gì?',
      options: ['Nhãn 1', 'Nhãn 0', 'Không xác định', 'Cả hai'],
      answerIndex: 1,
      explanation: 'So P với threshold: 0.7 < 0.8 → Class 0 (luôn so với threshold, không phải 0.5 cố định).',
    },
    {
      id: 'e1c11',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Đạo hàm',
      question: 'Đạo hàm của x² là gì?',
      options: ['x', '2x', 'x²', '2'],
      answerIndex: 1,
      explanation: 'd/dx (x²) = 2x.',
    },
    {
      id: 'e1c12',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Đạo hàm',
      question: 'Đạo hàm của 3x² + 2x là gì?',
      options: ['3x + 2', '6x + 2', 'x² + 2', '6x'],
      answerIndex: 1,
      explanation: '3x² → 6x; 2x → 2. Vậy 6x + 2.',
    },
    {
      id: 'e1c13',
      module: 'C',
      type: 'output-prediction',
      topic: 'Gradient Descent',
      question: 'Cho θ = 8, α = 0.1, gradient = 5. θ_new = θ − α·gradient bằng bao nhiêu?',
      options: ['7.5', '8.5', '13', '3'],
      answerIndex: 0,
      explanation: 'θ_new = 8 − 0.1*5 = 8 − 0.5 = 7.5.',
    },
    {
      id: 'e1c14',
      module: 'C',
      type: 'output-prediction',
      topic: 'K-Means',
      question: 'Cụm gồm các điểm (1, 2) và (3, 2). Centroid mới của cụm là gì?',
      options: ['(2, 2)', '(2, 1)', '(4, 4)', '(1, 3)'],
      answerIndex: 0,
      explanation: 'centroid = ((1+3)/2, (2+2)/2) = (2, 2).',
    },
    {
      id: 'e1c15',
      module: 'C',
      type: 'multiple-choice',
      topic: 'MVP',
      question: 'Mục đích của một MVP là gì?',
      options: ['Xây dựng sản phẩm hoàn chỉnh', 'Kiểm thử ý tưởng cốt lõi nhanh và rẻ', 'Kiếm tiền ngay lập tức', 'Thêm thật nhiều tính năng'],
      answerIndex: 1,
      explanation: 'MVP dùng để kiểm thử ý tưởng cốt lõi nhanh và rẻ.',
    },

    // ===== Module D (9) — Logic, Ethics & AI Behavior =====
    {
      id: 'e1d1',
      module: 'D',
      type: 'output-prediction',
      topic: 'Logic',
      question: 'Số tiếp theo của dãy 2, 4, 6, 8, ? là gì?',
      options: ['9', '10', '12', '16'],
      answerIndex: 1,
      explanation: 'Quy luật cộng 2 mỗi lần. 8 + 2 = 10.',
    },
    {
      id: 'e1d2',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Đạo đức AI',
      question: 'AI bias (thiên kiến AI) là gì?',
      options: ['AI chạy quá nhanh', 'Kết quả bất công do dữ liệu huấn luyện thiên lệch', 'AI bịa ra sự thật', 'AI chạy chậm'],
      answerIndex: 1,
      explanation: 'Bias bắt nguồn từ dữ liệu huấn luyện thiên lệch.',
    },
    {
      id: 'e1d3',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Ứng xử',
      question: 'Đồng đội đang bí một công việc. Ứng xử tốt nhất là gì?',
      options: ['Tự làm một mình', 'Đề nghị giúp đỡ và giải thích cách làm', 'Đổ lỗi cho họ', 'Bỏ qua vấn đề'],
      answerIndex: 1,
      explanation: 'Làm việc nhóm tốt là đề nghị giúp đỡ và hợp tác.',
    },
    {
      id: 'e1d4',
      module: 'D',
      type: 'output-prediction',
      topic: 'Logic',
      question: 'Số tiếp theo của dãy 3, 6, 9, 12, ? là gì?',
      options: ['13', '14', '15', '18'],
      answerIndex: 2,
      explanation: 'Quy luật cộng 3. 12 + 3 = 15.',
    },
    {
      id: 'e1d5',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Đạo đức AI',
      question: 'Hallucination (ảo giác) trong AI là gì?',
      options: ['AI sáng tạo', 'AI tự tin đưa ra thông tin sai', 'AI chạy chậm', 'AI học từ dữ liệu'],
      answerIndex: 1,
      explanation: 'Hallucination là khi AI tự tin bịa ra thông tin sai.',
    },
    {
      id: 'e1d6',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Ứng xử',
      question: 'Bạn không thể tự giải quyết một vấn đề. Bạn nên làm gì?',
      options: ['Bỏ cuộc', 'Nhờ đồng đội giúp', 'Đoán đại', 'Giấu vấn đề'],
      answerIndex: 1,
      explanation: 'Nhờ giúp đỡ là hành vi giải quyết vấn đề tốt.',
    },
    {
      id: 'e1d7',
      module: 'D',
      type: 'output-prediction',
      topic: 'Logic',
      question: 'Số tiếp theo của dãy 1, 1, 2, 3, 5, ? là gì?',
      options: ['6', '7', '8', '9'],
      answerIndex: 2,
      explanation: 'Mỗi số bằng tổng hai số trước: 3 + 5 = 8.',
    },
    {
      id: 'e1d8',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Đạo đức AI',
      question: 'Vì sao quyền riêng tư (privacy) quan trọng trong AI?',
      options: ['Giúp AI nhanh hơn', 'Bảo vệ dữ liệu cá nhân của người dùng', 'Giúp AI rẻ hơn', 'Không quan trọng'],
      answerIndex: 1,
      explanation: 'Quyền riêng tư bảo vệ dữ liệu cá nhân khỏi bị lạm dụng.',
    },
    {
      id: 'e1d9',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Ứng xử',
      question: 'Cách tiếp cận giải quyết vấn đề tốt là gì?',
      options: ['Giải quyết mọi thứ cùng lúc', 'Chia vấn đề thành các phần nhỏ', 'Bỏ qua vấn đề', 'Luôn tự làm một mình'],
      answerIndex: 1,
      explanation: 'Chia nhỏ vấn đề giúp việc giải quyết dễ dàng hơn.',
    },
  ],
}

