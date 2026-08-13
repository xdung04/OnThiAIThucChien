export default {
  id: 'mock-exam-2',
  title: 'Đề thi thử 2',
  description: 'Đề luyện thi đầy đủ · 60 câu · 90 phút',
  timeMinutes: 90,
  questions: [
    // ===== Module A (15) — Toán & Tư duy định lượng =====
    {
      id: 'e2a1',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[1, 1], [1, 1]])
print(A + B)`,
      options: ['[[2 3] [4 5]]', '[[2 2] [4 4]]', '[[1 2] [3 4]]', '[[2 3] [3 4]]'],
      answerIndex: 0,
      explanation: 'Phép cộng cộng từng phần tử: [[2,3],[4,5]].',
    },
    {
      id: 'e2a2',
      module: 'A',
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
      id: 'e2a3',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Thống kê',
      question: 'Lương (triệu) của 5 nhân viên: [8, 9, 10, 12, 30]. Con số nào phản ánh "mức lương điển hình" của nhóm tốt nhất?',
      options: ['Trung bình cộng (13.8)', 'Trung vị (10)', 'Mode', 'Độ lệch chuẩn'],
      answerIndex: 1,
      explanation: 'Lương 30 là outlier. Trung vị (10) bền vững hơn trung bình cộng (13.8) bị kéo lên bởi outlier.',
    },
    {
      id: 'e2a4',
      module: 'A',
      type: 'output-prediction',
      topic: 'Trị riêng',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 0], [0, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvalues)`,
      options: ['[2. 3.]', '[3. 2.]', '[[2 0] [0 3]]', '[1. 1.]'],
      answerIndex: 0,
      explanation: 'eigenvalues là mảng 1 chiều: [2. 3.].',
    },
    {
      id: 'e2a5',
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
      id: 'e2a6',
      module: 'A',
      type: 'output-prediction',
      topic: 'Vector',
      question: 'Kết quả là gì?',
      code: `import numpy as np
u = np.array([2, 3])
v = np.array([4, 5])
print(np.dot(u, v))`,
      options: ['23', '22', '14', '30'],
      answerIndex: 0,
      explanation: 'Tích vô hướng = 2*4 + 3*5 = 8 + 15 = 23.',
    },
    {
      id: 'e2a7',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.dot(A, B)[0, 1])`,
      options: ['19', '22', '43', '50'],
      answerIndex: 1,
      explanation: 'np.dot(A,B) = [[19,22],[43,50]]. Phần tử [0,1] = 22.',
    },
    {
      id: 'e2a8',
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
      id: 'e2a9',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận nghịch đảo',
      question: 'Ma trận 2×2 nào dưới đây KHÔNG có nghịch đảo?',
      options: ['[[2, 0], [0, 3]]', '[[1, 2], [2, 4]]', '[[1, 0], [0, 1]]', '[[0, 1], [1, 0]]'],
      answerIndex: 1,
      explanation: '[[1,2],[2,4]] có định thức = 1*4 - 2*2 = 0 nên không khả nghịch.',
    },
    {
      id: 'e2a10',
      module: 'A',
      type: 'output-prediction',
      topic: 'Trị riêng',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 0], [0, 3]])
eigenvalues, eigenvectors = np.linalg.eig(A)
print(eigenvectors[:, 1])`,
      options: ['[1. 0.]', '[0. 1.]', '[2. 3.]', '[0. 0.]'],
      answerIndex: 1,
      explanation: 'eigenvectors[:, 1] là cột thứ hai = [0. 1.].',
    },
    {
      id: 'e2a11',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Thống kê',
      question: 'Điểm trung bình có trọng số: bài kiểm tra hệ số 1 được 6, bài thi hệ số 2 được 9. Điểm tổng là bao nhiêu?',
      options: ['7.5', '8.0', '8.5', '7.0'],
      answerIndex: 1,
      explanation: 'TB = (6*1 + 9*2) / (1+2) = (6+18)/3 = 24/3 = 8.',
    },
    {
      id: 'e2a12',
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
      id: 'e2a13',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
print(A.T.shape)`,
      options: ['(2, 4)', '(4, 2)', '(8,)', '(1, 8)'],
      answerIndex: 1,
      explanation: 'Chuyển vị của (2,4) là (4,2).',
    },
    {
      id: 'e2a14',
      module: 'A',
      type: 'output-prediction',
      topic: 'Ma trận',
      question: 'Kết quả là gì?',
      code: `import numpy as np
A = np.array([[2, 1], [1, 3]])
b = np.array([7, 8])
print(np.linalg.solve(A, b)[1])`,
      options: ['1.8', '2.2', '2.6', '1.4'],
      answerIndex: 0,
      explanation: 'Hệ 2x + y = 7; x + 3y = 8 → y = 7 − 2x thay vào: x + 3(7−2x) = 8 → x + 21 − 6x = 8 → −5x = −13 → x = 2.6, y = 7 − 5.2 = 1.8. In y = 1.8.',
    },
    {
      id: 'e2a15',
      module: 'A',
      type: 'multiple-choice',
      topic: 'Thống kê',
      question: 'Độ lệch chuẩn (standard deviation) của [4, 4, 4, 4] là bao nhiêu?',
      options: ['4', '0', '16', '1'],
      answerIndex: 1,
      explanation: 'Mọi giá trị đều bằng trung bình, độ lệch = 0 → std = 0.',
    },
    // ===== Module B (21) — Lập trình & Xử lý dữ liệu =====
    {
      id: 'e2b1',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `words = ["apple", "banana", "cherry"]
print([w.upper() for w in words if w.startswith("b")])`,
      options: ["['BANANA']", "['APPLE']", "['CHERRY']", "['apple', 'banana', 'cherry']"],
      answerIndex: 0,
      explanation: 'Lọc từ bắt đầu bằng "b" (banana) rồi viết hoa → ["BANANA"].',
    },
    {
      id: 'e2b2',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `def grade(s):
    return "A" if s >= 90 else ("B" if s >= 80 else "C")

print(grade(85))`,
      options: ['A', 'B', 'C', 'AB'],
      answerIndex: 1,
      explanation: '85 >= 80 nên nhánh "B" chạy; không đạt >= 90 nên không phải A.',
    },
    {
      id: 'e2b3',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([3, 6, 9, 12])
print((a % 3 == 0).sum())`,
      options: ['2', '3', '4', '1'],
      answerIndex: 2,
      explanation: 'Mọi phần tử đều chia hết cho 3 → mask toàn True → sum = 4.',
    },
    {
      id: 'e2b4',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
scores = np.array([[70, 90], [80, 60]])
print(scores.mean(axis=0))`,
      options: ['[75. 75.]', '[80. 75.]', '[75. 80.]', '[70. 60.]'],
      answerIndex: 0,
      explanation: 'axis=0 trung bình theo CỘT: (70+80)/2=75, (90+60)/2=75 → [75. 75.].',
    },
    {
      id: 'e2b5',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"dept": ["IT", "IT", "HR"], "salary": [1000, 1200, 800]})
print(df.groupby("dept")["salary"].mean())`,
      options: ['IT 1100, HR 800', 'IT 2200, HR 800', 'IT 1000, HR 800', 'IT 1100, HR 400'],
      answerIndex: 0,
      explanation: 'IT = (1000+1200)/2 = 1100; HR = 800.',
    },
    {
      id: 'e2b6',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df.sort_values("age").iloc[-1]["name"])`,
      options: ['Minh', 'Lan', 'Huy', 'Error'],
      answerIndex: 1,
      explanation: 'Sắp tuổi tăng dần [22, 25, 30]; iloc[-1] là hàng cuối (30) → Lan.',
    },
    {
      id: 'e2b7',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"dept": ["IT", "Sales", "IT", "Sales"], "salary": [1000, 800, 1200, 900]})
print(df.groupby("dept")["salary"].sum())`,
      options: ['IT 2200, Sales 1700', 'IT 1000, Sales 800', 'IT 1200, Sales 900', 'IT 2000, Sales 1700'],
      answerIndex: 0,
      explanation: 'IT = 1000+1200 = 2200; Sales = 800+900 = 1700.',
    },
    {
      id: 'e2b8',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([4, 5, 6])
print(np.concatenate([a, b]))`,
      options: ['[1 2 3 4 5 6]', '[[1 2 3] [4 5 6]]', '[5 7 9]', '[4 5 6 1 2 3]'],
      answerIndex: 0,
      explanation: 'np.concatenate nối 2 mảng 1D theo thứ tự → [1 2 3 4 5 6].',
    },
    {
      id: 'e2b9',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `data = [{"n": 1}, {"n": 2}, {"n": 3}]
print(sum(d["n"] for d in data))`,
      options: ['3', '6', '4', '123'],
      answerIndex: 1,
      explanation: 'Generator cộng các giá trị n: 1+2+3 = 6.',
    },
    {
      id: 'e2b10',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
a = np.array([[1, 5], [3, 2]])
print(a.max(axis=0))`,
      options: ['[3 5]', '[5 3]', '[1 2]', '[5 2]'],
      answerIndex: 0,
      explanation: 'axis=0 max theo CỘT: cột 0 = max(1,3)=3, cột 1 = max(5,2)=5 → [3 5].',
    },
    {
      id: 'e2b11',
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
      id: 'e2b12',
      module: 'B',
      type: 'output-prediction',
      topic: 'NumPy',
      question: 'Kết quả là gì?',
      code: `import numpy as np
w = np.array([0.4, 0.3, 0.3])
s = np.array([8, 6, 10])
print(np.dot(w, s))`,
      options: ['7.8', '8.0', '7.2', '8.4'],
      answerIndex: 1,
      explanation: 'Điểm có trọng số = 0.4*8 + 0.3*6 + 0.3*10 = 3.2 + 1.8 + 3.0 = 8.0.',
    },
    {
      id: 'e2b13',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"x": [1, 2, 3], "y": [4, 5, 6]})
print(df.dropna().shape)`,
      options: ['(3, 2)', '(2, 3)', '(3, 3)', '(0, 0)'],
      answerIndex: 0,
      explanation: 'Không có giá trị thiếu, dropna giữ nguyên (3, 2).',
    },
    {
      id: 'e2b14',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `data = [3, 1, 4, 1, 5]
counts = {}
for n in data:
    counts[n] = counts.get(n, 0) + 1
print(counts)`,
      options: ["{3: 1, 1: 2, 4: 1, 5: 1}", "{3: 1, 1: 1, 4: 1, 5: 1}", "{3: 1, 1: 2, 4: 1, 5: 2}", "{3: 1, 4: 1, 1: 1, 5: 1}"],
      answerIndex: 0,
      explanation: 'Đếm tần suất: 3→1, 1→2, 4→1, 5→1 → {3:1, 1:2, 4:1, 5:1}.',
    },
    {
      id: 'e2b15',
      module: 'B',
      type: 'output-prediction',
      topic: 'Python',
      question: 'Kết quả là gì?',
      code: `scores = {"Minh": 7, "Lan": 9}
print(scores.get("Huy", 0))`,
      options: ['0', '7', '9', 'Error'],
      answerIndex: 0,
      explanation: 'get("Huy", 0): khóa không tồn tại → trả về giá trị mặc định 0.',
    },
    {
      id: 'e2b16',
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
      id: 'e2b17',
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
      id: 'e2b21',
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
    {
      id: 'e2b18',
      module: 'B',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df.loc[1]["name"])`,
      options: ['Minh', 'Lan', 'Huy', 'Error'],
      answerIndex: 1,
      explanation: 'loc[1] lấy hàng có chỉ số nhãn 1 = Lan.',
    },
    {
      id: 'e2b19',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan"], "age": [None, 30]})
print(df["age"].isna().sum())`,
      options: ['0', '1', '2', 'None'],
      answerIndex: 1,
      explanation: 'Cột age có 1 giá trị None → isna().sum() = 1.',
    },
    {
      id: 'e2b20',
      module: 'B',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"city": ["HN", "HCM", "HN", "DN"]})
print(df["city"].nunique())`,
      options: ['2', '3', '4', '1'],
      answerIndex: 1,
      explanation: 'nunique() đếm giá trị duy nhất: HN, HCM, DN = 3.',
    },

    // ===== Module C (15) — AI Knowledge & Product Thinking =====
    {
      id: 'e2c1',
      module: 'C',
      type: 'multiple-choice',
      topic: 'AI vs ML vs DL',
      question: 'Học máy (Machine Learning) học từ đâu?',
      options: ['Các quy tắc viết bằng tay', 'Dữ liệu', 'Đoán ngẫu nhiên', 'Không học gì'],
      answerIndex: 1,
      explanation: 'ML học các mẫu từ dữ liệu.',
    },
    {
      id: 'e2c2',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'Cho b₀ = 1, b₁ = 5, x = 2. Giá trị dự đoán ŷ = b₀ + b₁x là bao nhiêu?',
      options: ['10', '11', '7', '15'],
      answerIndex: 1,
      explanation: 'ŷ = 1 + 5*2 = 1 + 10 = 11.',
    },
    {
      id: 'e2c3',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'Một điểm có y = 10 và ŷ = 7. Residual e = y − ŷ bằng bao nhiêu?',
      options: ['3', '-3', '17', '0'],
      answerIndex: 0,
      explanation: 'e = 10 − 7 = 3.',
    },
    {
      id: 'e2c4',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'Các residual là [1, 1, 1]. SSE (Σ e²) bằng bao nhiêu?',
      options: ['1', '3', '9', '0'],
      answerIndex: 1,
      explanation: 'SSE = 1 + 1 + 1 = 3.',
    },
    {
      id: 'e2c5',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy tuyến tính',
      question: 'SSE = 18 và n = 6 điểm. MSE bằng bao nhiêu?',
      options: ['3', '6', '108', '12'],
      answerIndex: 0,
      explanation: 'MSE = SSE / n = 18 / 6 = 3.',
    },
    {
      id: 'e2c6',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy tuyến tính',
      question: 'Mô hình A có R² = 0.8, mô hình B có R² = 0.55. Mô hình nào tốt hơn?',
      options: ['Mô hình A', 'Mô hình B', 'Bằng nhau', 'Không so sánh được'],
      answerIndex: 0,
      explanation: 'R² càng gần 1 càng tốt, nên mô hình A (0.8) tốt hơn.',
    },
    {
      id: 'e2c7',
      module: 'C',
      type: 'output-prediction',
      topic: 'Hồi quy logistic',
      question: 'Cho b₀ = 0, b₁ = 3, x = 2. Điểm tuyến tính z = b₀ + b₁x bằng bao nhiêu?',
      options: ['5', '6', '3', '0'],
      answerIndex: 1,
      explanation: 'z = 0 + 3*2 = 6.',
    },
    {
      id: 'e2c8',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy logistic',
      question: 'σ(0) (sigmoid tại z = 0) bằng bao nhiêu?',
      options: ['0', '0.5', '1', 'Không xác định'],
      answerIndex: 1,
      explanation: 'σ(0) = 1 / (1 + e⁰) = 0.5.',
    },
    {
      id: 'e2c9',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Hồi quy logistic',
      question: 'Xác suất P = 0.6, ngưỡng (threshold) = 0.8. Class dự đoán là gì?',
      options: ['Nhãn 1', 'Nhãn 0', 'Không xác định', 'Cả hai'],
      answerIndex: 1,
      explanation: 'So P với threshold: 0.6 < 0.8 → Class 0.',
    },
    {
      id: 'e2c10',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Đạo hàm',
      question: 'Đạo hàm của 3x² + 2x là gì?',
      options: ['3x + 2', '6x + 2', 'x² + 2', '6x'],
      answerIndex: 1,
      explanation: '3x² → 6x; 2x → 2. Vậy 6x + 2.',
    },
    {
      id: 'e2c11',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Đạo hàm',
      question: 'Nếu gradient tại một điểm là dương, hàm đang…?',
      options: ['Tăng', 'Giảm', 'Đứng yên', 'Bằng 0'],
      answerIndex: 0,
      explanation: 'Gradient dương → độ dốc dương → hàm đang tăng.',
    },
    {
      id: 'e2c12',
      module: 'C',
      type: 'output-prediction',
      topic: 'Gradient Descent',
      question: 'Cho θ = 0, α = 0.01, gradient = 100. θ_new = θ − α·gradient bằng bao nhiêu?',
      options: ['1', '-1', '0.1', '100'],
      answerIndex: 1,
      explanation: 'θ_new = 0 − 0.01*100 = 0 − 1 = -1.',
    },
    {
      id: 'e2c13',
      module: 'C',
      type: 'multiple-choice',
      topic: 'Gradient Descent',
      question: 'Learning rate quá lớn có thể gây ra điều gì?',
      options: ['Vọt qua điểm tối thiểu / phân kỳ', 'Hội tụ an toàn', 'Không ảnh hưởng', 'Luôn đúng'],
      answerIndex: 0,
      explanation: 'Learning rate lớn → bước quá lớn, dễ vọt qua và phân kỳ.',
    },
    {
      id: 'e2c14',
      module: 'C',
      type: 'multiple-choice',
      topic: 'K-Means',
      question: 'Khoảng cách Euclid giữa điểm (1, 1) và centroid (4, 5) là bao nhiêu?',
      options: ['√18 (~4.24)', '5', '√20 (~4.47)', '7'],
      answerIndex: 1,
      explanation: 'd = √((4-1)² + (5-1)²) = √(9 + 16) = √25 = 5.',
    },
    {
      id: 'e2c15',
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
      id: 'e2d1',
      module: 'D',
      type: 'output-prediction',
      topic: 'Logic',
      question: 'Số tiếp theo của dãy 1, 2, 4, 8, ? là gì?',
      options: ['10', '12', '16', '9'],
      answerIndex: 2,
      explanation: 'Quy luật nhân 2. 8 × 2 = 16.',
    },
    {
      id: 'e2d2',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Đạo đức AI',
      question: 'Hallucination (ảo giác) trong AI là gì?',
      options: ['AI sáng tạo', 'AI tự tin đưa ra thông tin sai', 'AI chạy chậm', 'AI học từ dữ liệu'],
      answerIndex: 1,
      explanation: 'Hallucination là AI tự tin bịa ra thông tin sai.',
    },
    {
      id: 'e2d3',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Ứng xử',
      question: 'Bạn không thể tự giải quyết một vấn đề. Bạn nên làm gì?',
      options: ['Bỏ cuộc', 'Nhờ đồng đội giúp', 'Đoán đại', 'Giấu vấn đề'],
      answerIndex: 1,
      explanation: 'Nhờ giúp đỡ là hành vi giải quyết vấn đề tốt.',
    },
    {
      id: 'e2d4',
      module: 'D',
      type: 'output-prediction',
      topic: 'Logic',
      question: 'Số tiếp theo của dãy 5, 10, 15, 20, ? là gì?',
      options: ['21', '22', '25', '30'],
      answerIndex: 2,
      explanation: 'Quy luật cộng 5. 20 + 5 = 25.',
    },
    {
      id: 'e2d5',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Đạo đức AI',
      question: 'AI có quyết định gây hại do dữ liệu thiên lệch. Đây gọi là gì?',
      options: ['Hallucination', 'Bias (thiên kiến)', 'Overfitting', 'Underfitting'],
      answerIndex: 1,
      explanation: 'Bias là kết quả bất công do dữ liệu huấn luyện thiên lệch.',
    },
    {
      id: 'e2d6',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Ứng xử',
      question: 'Đồng đội đang bí một công việc. Ứng xử tốt nhất là gì?',
      options: ['Tự làm một mình', 'Đề nghị giúp và giải thích cách làm', 'Đổ lỗi', 'Bỏ qua'],
      answerIndex: 1,
      explanation: 'Làm việc nhóm tốt là đề nghị giúp đỡ và hợp tác.',
    },
    {
      id: 'e2d7',
      module: 'D',
      type: 'output-prediction',
      topic: 'Logic',
      question: 'Số tiếp theo của dãy 2, 6, 10, 14, ? là gì?',
      options: ['15', '16', '18', '20'],
      answerIndex: 2,
      explanation: 'Quy luật cộng 4. 14 + 4 = 18.',
    },
    {
      id: 'e2d8',
      module: 'D',
      type: 'multiple-choice',
      topic: 'Đạo đức AI',
      question: 'Responsible AI (AI có trách nhiệm) có nghĩa là gì?',
      options: ['AI chạy nhanh', 'AI công bằng, an toàn và minh bạch', 'AI đắt tiền', 'AI không bao giờ sai'],
      answerIndex: 1,
      explanation: 'Responsible AI là công bằng, an toàn, minh bạch và chịu trách nhiệm.',
    },
    {
      id: 'e2d9',
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

