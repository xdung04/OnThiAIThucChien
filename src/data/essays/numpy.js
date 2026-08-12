// Ôn tập tự luận — NumPy (30 câu) · tính tay, không máy tính.
// Mức độ: trên cơ bản — phối hợp nhiều khái niệm, số nhỏ.
export default {
  id: 'numpy',
  label: 'NumPy',
  order: 1,
  desc: '30 câu · đọc code & tính tay',
  questions: [
    {
      id: 'np-e01',
      section: 'numpy',
      topic: 'Reshape & Slicing 2D',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra mảng nào?',
      code: `import numpy as np
a = np.arange(20).reshape(4, 5)
print(a[1:3, 2:4])`,
      answerText: '[[7 8]\n [12 13]]',
      steps: [
        'np.arange(20) tạo mảng 1D [0,1,...,19].',
        'reshape(4, 5): 4 hàng × 5 cột → hàng 1 là [5,6,7,8,9], hàng 2 là [10,11,12,13,14].',
        'a[1:3, 2:4]: lấy hàng 1→2 (loại trừ 3), cột 2→3 (loại trừ 4).',
        'Ghép lại [[7,8],[12,13]] — giữ nguyên 2 chiều.',
      ],
      tip: 'Slicing nhiều chiều theo dạng [hàng, cột]; cận phải LUÔN bị loại trừ.',
    },
    {
      id: 'np-e02',
      section: 'numpy',
      topic: 'Index âm & bước nhảy',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.arange(10)
print(a[-4:-1:2])`,
      answerText: '[6 8]',
      steps: [
        'a = [0,1,2,3,4,5,6,7,8,9].',
        'a[-4:-1] tương đương chỉ số 6→8 (phần tử 9 bị loại vì -1 là cận phải).',
        'Bước nhảy 2 → chỉ lấy các phần tử ở chỉ số 6 và 8.',
        'Kết quả: [6 8].',
      ],
      tip: 'Index âm -1 là phần tử cuối; khi dùng slicing, -1 nằm ở vị trí cận phải nên bị loại.',
    },
    {
      id: 'np-e03',
      section: 'numpy',
      topic: 'Reshape với -1',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.arange(24)
b = a.reshape(2, -1)
print(b.shape, b[1, -1])`,
      answerText: '(2, 12) 23',
      steps: [
        '-1 trong reshape nghĩa là "điền số còn lại bắt buộc" để vừa tổng phần tử.',
        '24 phần tử, chỉ định 2 hàng → cột = 24 / 2 = 12.',
        'b[1] là hàng cuối: [12,13,...,23].',
        'b[1, -1] = phần tử cuối cùng của hàng 1 = 23.',
      ],
      tip: 'Luôn kiểm tra tổng phần tử chia hết cho số kích thước đã chỉ định, nếu không reshape sẽ báo lỗi.',
    },
    {
      id: 'np-e04',
      section: 'numpy',
      topic: 'Broadcasting',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import numpy as np
A = np.ones((2, 3), dtype=int)
b = np.array([10, 20, 30])
print((A * b)[1, 2])`,
      answerText: '30',
      steps: [
        'A có shape (2,3), b có shape (3,) — broadcasting chập cột trái: (2,3) * (1,3) → (2,3).',
        'A * b tương đương nhân từng phần tử, mỗi hàng của A đều nhân với b.',
        'Hàng 1: [10, 20, 30].',
        'Phần tử [1, 2] = 30.',
      ],
      tip: 'Broadcasting hoạt động khi các chiều khớp từ phải sang trái, chiều = 1 hoặc bằng nhau.',
    },
    {
      id: 'np-e05',
      section: 'numpy',
      topic: 'Broadcasting cột × hàng',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra shape nào? Vì sao không báo lỗi?',
      code: `import numpy as np
col = np.array([[1], [2], [3]])
row = np.array([10, 20])
print((col + row).shape)`,
      answerText: '(3, 2)',
      steps: [
        'col shape (3,1), row shape (2,) — đưa row về (1,2) khi so chiều.',
        'So từ phải sang trái: 1 vs 2 → khác nhưng 1 được "kéo dãn" lên 2.',
        '3 vs 1 → kéo dãn lên 3 → kết quả (3,2).',
        'Kết quả = [[11,21],[12,22],[13,23]] nhưng đề chỉ hỏi shape.',
      ],
      tip: 'Khi một chiều bằng 1, NumPy tự kéo dãn; khi hai chiều khác nhau và cả hai đều > 1 thì mới lỗi.',
    },
    {
      id: 'np-e06',
      section: 'numpy',
      topic: 'Broadcasting lỗi',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.array([1, 2, 3])
b = np.array([1, 2, 3, 4])
print(a + b)`,
      answerText: 'Không in được — ném ValueError (shapes (3,) and (4,) không align để broadcast).',
      steps: [
        'Shape a = (3,), shape b = (4,).',
        'So từ phải sang trái: 3 vs 4 — không bằng nhau, không có chiều nào = 1.',
        'Không thể kéo dãn → NumPy ném ValueError.',
      ],
      tip: 'Đây là câu "bẫy": nhiều bạn đoán đáp án số thay vì nhớ rằng phép cộng lỗi ngay.',
    },
    {
      id: 'np-e07',
      section: 'numpy',
      topic: 'Phép nhân elementwise',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra mảng nào? (cẩn thận: đây KHÔNG phải phép nhân ma trận)',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[1, 1], [0, 2]])
print(A * B)`,
      answerText: '[[1 2]\n [0 8]]',
      steps: [
        'Toán tử * trong NumPy là nhân TỪNG PHẦN TỬ (elementwise), không phải nhân ma trận.',
        'Nhân các ô cùng vị trí: (1,1)=1, (1,2)=2, (2,1)=0, (2,2)=8.',
        'Kết quả: [[1,2],[0,8]].',
      ],
      tip: 'Muốn nhân ma trận thật phải dùng np.dot hoặc @ — đây là câu bẫy số 1 của phần NumPy.',
    },
    {
      id: 'np-e08',
      section: 'numpy',
      topic: 'Nhân ma trận × vector',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
v = np.array([1, 1])
print(np.dot(A, v))`,
      answerText: '[3 7]',
      steps: [
        'np.dot(A, v): mỗi HÀNG của A chấm (nhân-cộng) với vector v.',
        'Hàng 1: 1*1 + 2*1 = 3; Hàng 2: 3*1 + 4*1 = 7.',
        'Kết quả vector 1D [3 7].',
      ],
      tip: 'dot ma trận × vector cho ra vector có độ dài bằng số hàng của ma trận.',
    },
    {
      id: 'np-e09',
      section: 'numpy',
      topic: 'Nhân ma trận 2×2',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra mảng nào?',
      code: `import numpy as np
A = np.array([[1, 2], [3, 4]])
B = np.array([[5, 6], [7, 8]])
print(np.dot(A, B))`,
      answerText: '[[19 22]\n [43 50]]',
      steps: [
        'Công thức (AB)[i,j] = tổng theo k của A[i,k]*B[k,j].',
        '[0,0] = 1*5 + 2*7 = 19; [0,1] = 1*6 + 2*8 = 22.',
        '[1,0] = 3*5 + 4*7 = 43; [1,1] = 3*6 + 4*8 = 50.',
      ],
      tip: 'Hàng ma trận TRÁI chấm với CỘT ma trận PHẢI — viết 4 phép chấm ra nháp cho an toàn.',
    },
    {
      id: 'np-e10',
      section: 'numpy',
      topic: 'dot vs * (1D)',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì (2 dòng)?',
      code: `import numpy as np
u = np.array([1, 2, 3])
v = np.array([4, 5, 6])
print(np.dot(u, v))
print(u * v)`,
      answerText: '32\n[ 4 10 18]',
      steps: [
        'np.dot(u, v) = 1*4 + 2*5 + 3*6 = 32 — một SỐ (tích vô hướng).',
        'u * v là elementwise, giữ 3 phần tử: [4, 10, 18].',
      ],
      tip: 'dot với 1D cho ra SỐ; * với 1D vẫn cho ra MẢNG — phân biệt rõ dấu chấm và dấu sao.',
    },
    {
      id: 'np-e11',
      section: 'numpy',
      topic: 'sum theo axis',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.arange(6).reshape(2, 3)
print(a.sum(axis=0))`,
      answerText: '[3 5 7]',
      steps: [
        'a = [[0,1,2],[3,4,5]].',
        'axis=0 → khử theo chiều HÀNG → thu gọn theo từng CỘT.',
        'Cột 0: 0+3=3; cột 1: 1+4=5; cột 2: 2+5=7.',
        'Kết quả [3 5 7].',
      ],
      tip: 'Mẹo: axis=0 → kết quả giữ hình dạng CỘT (độ dài = số cột); axis=1 → giữ hình dạng HÀNG.',
    },
    {
      id: 'np-e12',
      section: 'numpy',
      topic: 'mean theo axis',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.array([[1, 5], [2, 6], [3, 7]])
print(a.mean(axis=1))`,
      answerText: '[3. 4. 5.]',
      steps: [
        'axis=1 → khử theo chiều CỘT → trung bình từng HÀNG.',
        'Hàng 0: (1+5)/2 = 3.0; Hàng 1: (2+6)/2 = 4.0; Hàng 2: (3+7)/2 = 5.0.',
        'mean luôn trả float → kết quả [3. 4. 5.].',
      ],
      tip: 'So với np-e11 (axis=0 + sum) và câu này (axis=1 + mean) để thuộc quy tắc đổi chiều axis.',
    },
    {
      id: 'np-e13',
      section: 'numpy',
      topic: 'max & argmax theo axis',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra gì (2 dòng)?',
      code: `import numpy as np
a = np.array([[3, 7], [9, 2], [1, 8]])
print(a.max(axis=1))
print(a.argmax(axis=0))`,
      answerText: '[7 9 8]\n[1 2]',
      steps: [
        'max(axis=1): tìm max từng HÀNG → [7, 9, 8].',
        'argmax(axis=0): tìm CHỈ SỐ của max theo từng CỘT.',
        'Cột 0: max là 9 ở hàng 1 → 1; Cột 1: max là 8 ở hàng 2 → 2.',
        'Kết quả [1, 2].',
      ],
      tip: 'argmax trả về CHỈ SỐ chứ không phải giá trị — và luôn theo đúng axis chỉ định.',
    },
    {
      id: 'np-e14',
      section: 'numpy',
      topic: 'keepdims',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra shape nào? Vì sao?',
      code: `import numpy as np
a = np.array([[1, 2], [3, 4]])
print(a.sum(axis=1, keepdims=True).shape)`,
      answerText: '(2, 1)',
      steps: [
        'sum(axis=1) thiếu keepdims sẽ cho ra [3, 7] — shape (2,).',
        'keepdims=True GIỮ LẠI chiều vừa khử dưới dạng size 1.',
        'Vì thế kết quả có shape (2, 1).',
      ],
      tip: 'keepdims dùng để giữ cấu trúc hầu broadcast tiếp với ma trận gốc; bỏ nó sẽ mất một chiều.',
    },
    {
      id: 'np-e15',
      section: 'numpy',
      topic: 'Ma trận đơn vị × vector',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
I = np.eye(3)
v = np.array([1, 2, 3])
print(np.dot(I, v))`,
      answerText: '[1. 2. 3.] (dạng float vì I là ma trận float)',
      steps: [
        'np.eye(3) tạo ma trận đơn vị 3×3 (1 trên đường chéo, 0 còn lại).',
        'Nhân ma trận đơn vị với vector thì vector không đổi.',
        'Vì I là float nên kết quả là [1. 2. 3.].',
      ],
      tip: 'Ma trận đơn vị giống số 1 trong phép nhân ma trận — A·I = A.',
    },
    {
      id: 'np-e16',
      section: 'numpy',
      topic: 'Boolean mask đếm',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.array([1, 5, 3, 8, 2])
print((a > 3).sum())`,
      answerText: '2',
      steps: [
        'a > 3 tạo mảng boolean: [F, T, F, T, F].',
        'True được đếm như 1 khi làm phép sum.',
        'Số phần tử > 3 là 5 và 8 → kết quả 2.',
      ],
      tip: '(mask).sum() là cách đếm phần tử thoả điều kiện — mẹo cực kỳ phổ biến trong đề.',
    },
    {
      id: 'np-e17',
      section: 'numpy',
      topic: 'Lọc bằng boolean mask',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.array([1, 5, 3, 8, 2])
print(a[a % 2 == 0])`,
      answerText: '[8 2]',
      steps: [
        'a % 2 == 0 → mask đánh dấu số CHẴN: [F, F, F, T, T].',
        'Truyền mask vào a để giữ lại đúng phần tử True.',
        'Các số chẵn là 8 và 2 → [8 2].',
      ],
      tip: 'a[mask] giữ lại đúng vị trí True — mask phải là mảng boolean cùng độ dài.',
    },
    {
      id: 'np-e18',
      section: 'numpy',
      topic: 'np.where thay thế',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.array([1, -2, 3, -4])
print(np.where(a > 0, a, 0))`,
      answerText: '[1 0 3 0]',
      steps: [
        'np.where(điều kiện, giá trị nếu đúng, giá trị nếu sai).',
        'Với a>0 thì giữ nguyên a; ngược lại thay bằng 0.',
        'Kết quả [1, 0, 3, 0].',
      ],
      tip: 'np.where là cách viết if-else vector hoá áp dụng trên từng phần tử của mảng.',
    },
    {
      id: 'np-e19',
      section: 'numpy',
      topic: 'np.where với phép tính',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.array([1, 2, 3, 4])
print(np.where(a % 2 == 1, a * 10, a))`,
      answerText: '[10  2 30  4]',
      steps: [
        'Điều kiện: a % 2 == 1 (số lẻ).',
        'Số lẻ (1, 3) → nhân 10 → 10, 30.',
        'Số chẵn (2, 4) → giữ nguyên. Kết quả [10, 2, 30, 4].',
      ],
      tip: 'np.where(x, A, B) trả về mảng cùng shape với x: ô đúng lấy từ A, ô sai lấy từ B.',
    },
    {
      id: 'np-e20',
      section: 'numpy',
      topic: 'Fancy indexing trùng chỉ số',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.array([10, 20, 30, 40])
print(a[[3, 1, 1, 0]])`,
      answerText: '[40 20 20 10]',
      steps: [
        'Fancy indexing dùng mảng chỉ số [3, 1, 1, 0].',
        'Mỗi vị trí lấy phần tử theo chỉ số tương ứng, cho phép lặp lại.',
        'a[3]=40, a[1]=20, a[1]=20, a[0]=10 → [40, 20, 20, 10].',
      ],
      tip: 'Khác slicing thường, fancy indexing GIỮ nguyên thứ tự và cho phép chỉ số lặp lại.',
    },
    {
      id: 'np-e21',
      section: 'numpy',
      topic: 'Chia lấy phần nguyên',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.array([1, 2, 3, 4, 5])
print((a // 2).sum())`,
      answerText: '6',
      steps: [
        '// là chia lấy phần NGUYÊN (floor division).',
        'a // 2 = [0, 1, 1, 2, 2].',
        'Tổng = 0 + 1 + 1 + 2 + 2 = 6.',
      ],
      tip: 'Phân biệt / (chia thường, trả float) với // (chia nguyên). Mảng int chia // vẫn là int.',
    },
    {
      id: 'np-e22',
      section: 'numpy',
      topic: 'astype + mean',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.array([1, 2, 3, 4])
print(a.astype(float).mean())`,
      answerText: '2.5',
      steps: [
        'astype(float) đổi mảng sang kiểu float.',
        'mean = (1+2+3+4) / 4 = 10 / 4 = 2.5.',
        'mean của NumPy luôn trả float nên ra đúng 2.5.',
      ],
      tip: 'astype dùng để ép kiểu; với phép mean không cần vì NumPy đã trả float64.',
    },
    {
      id: 'np-e23',
      section: 'numpy',
      topic: 'linspace',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
print(np.linspace(0, 10, 5))`,
      answerText: '[ 0.   2.5  5.   7.5  10. ]',
      steps: [
        'linspace(0, 10, 5): 5 điểm cách đều từ 0 đến 10 (BAO GỒM cả 2 đầu).',
        'Bước = (10 - 0) / (5 - 1) = 2.5.',
        'Dãy: 0, 2.5, 5, 7.5, 10.',
      ],
      tip: 'Công thức bước: (stop - start) / (num - 1). Linspace bao điểm cuối, khác arange (theo bước).',
    },
    {
      id: 'np-e24',
      section: 'numpy',
      topic: 'arange bước âm',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
print(np.arange(5, 0, -2))`,
      answerText: '[5 3 1]',
      steps: [
        'arange(start, stop, step): tạo dãy từ start theo step, KHÔNG bao gồm stop.',
        'Với step=-2: 5, 3, 1.',
        'Dừng trước khi đi quá stop 0 → [5, 3, 1].',
      ],
      tip: 'arange không bao gồm điểm stop — nên 0 và -1 không xuất hiện trong kết quả.',
    },
    {
      id: 'np-e25',
      section: 'numpy',
      topic: 'Định thức 2×2',
      difficulty: 'Trung bình',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import numpy as np
A = np.array([[2, 1], [1, 3]])
print(np.linalg.det(A))`,
      answerText: '5.0',
      steps: [
        'Định thức ma trận 2×2 [[a,b],[c,d]] = a*d - b*c.',
        'det = 2*3 - 1*1 = 6 - 1 = 5.',
        'np.linalg.det trả float nên in ra 5.0.',
      ],
      tip: 'det ≠ 0 nghĩa là ma trận khả nghịch (có inverse).',
    },
    {
      id: 'np-e26',
      section: 'numpy',
      topic: 'Nghịch đảo & kiểm chứng',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra giá trị nào? (hãy tự tính A⁻¹ trước khi đoán)',
      code: `import numpy as np
A = np.array([[2, 1], [1, 3]])
Ainv = np.linalg.inv(A)
print(np.dot(A, Ainv)[1, 1])`,
      answerText: '1.0',
      steps: [
        'A⁻¹ = (1/det) * [[3, -1], [-1, 2]] với det = 5.',
        'Mọi ma trận nhân với nghịch đảo của nó đều ra ma trận đơn vị I.',
        'I[1,1] = 1 → np.dot(A, Ainv)[1,1] = 1.0.',
      ],
      tip: 'Nghịch đảo 2×2: [[a,b],[c,d]]⁻¹ = 1/(ad-bc) * [[d,-b],[-c,a]].',
    },
    {
      id: 'np-e27',
      section: 'numpy',
      topic: 'Tổng trị riêng = vết',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra giá trị nào?',
      code: `import numpy as np
A = np.array([[2, 1], [1, 2]])
print(np.linalg.eigvals(A).sum())`,
      answerText: '4.0',
      steps: [
        'Tổng các trị riêng của một ma trận luôn bằng VẾT (tổng đường chéo chính).',
        'Đường chéo chính: 2 + 2 = 4.',
        'Kiểm chứng: PTĐT (2-λ)² - 1 = 0 → λ² - 4λ + 3 = 0 → λ = 1, 3; tổng = 4.',
      ],
      tip: 'Không cần giải đầy đủ — tổng trị riêng = trace, vừa nhanh vừa chắc chắn.',
    },
    {
      id: 'np-e28',
      section: 'numpy',
      topic: 'Tổng hợp: reshape + transpose + dot',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
a = np.arange(6).reshape(2, 3)
b = a.T
c = np.dot(a, b)
print(c.shape, c[0, 1])`,
      answerText: '(2, 2) 14',
      steps: [
        'a = [[0,1,2],[3,4,5]] shape (2,3); a.T shape (3,2).',
        'c = a·aᵀ → dot (2,3)·(3,2) hợp lệ → shape (2,2).',
        'c[0,1] = hàng 0 của a chấm với hàng 1 của a: 0*3 + 1*4 + 2*5 = 14.',
      ],
      tip: 'dot hợp lệ khi chiều trong bằng nhau (3 = 3); shape kết quả = (chiều ngoài trái, chiều ngoài phải).',
    },
    {
      id: 'np-e29',
      section: 'numpy',
      topic: 'Mảng 3 chiều',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra gì?',
      code: `import numpy as np
t = np.arange(8).reshape(2, 2, 2)
print(t[1, 0, 1])`,
      answerText: '5',
      steps: [
        'np.arange(8).reshape(2,2,2) chia thành 2 khối (2,2): khối 0 = [[0,1],[2,3]], khối 1 = [[4,5],[6,7]].',
        't[1] → khối 1; t[1,0] → hàng 0 của khối 1 = [4,5].',
        't[1,0,1] → phần tử thứ 2 = 5.',
      ],
      tip: 'Đọc mảng 3D theo thứ tự [khối, hàng, cột] — tách từng khối (2,2) ra nháp trước.',
    },
    {
      id: 'np-e30',
      section: 'numpy',
      topic: 'Câu tổng hợp cuối',
      difficulty: 'Khó',
      question: 'Đoạn code sau in ra gì? (tính điểm trung bình có trọng số của từng học viên)',
      code: `import numpy as np
scores = np.array([[8, 6], [7, 9], [5, 8]])
weights = np.array([0.4, 0.6])
w = np.dot(scores, weights)
print(w.round(1))`,
      answerText: '[6.8 8.2 6.8]',
      steps: [
        'Mỗi hàng scores là (giữa kỳ, cuối kỳ); weights = [0.4, 0.6] là trọng số.',
        'w[0] = 8*0.4 + 6*0.6 = 3.2 + 3.6 = 6.8.',
        'w[1] = 7*0.4 + 9*0.6 = 2.8 + 5.4 = 8.2.',
        'w[2] = 5*0.4 + 8*0.6 = 2 + 4.8 = 6.8 → [6.8 8.2 6.8].',
      ],
      tip: 'dot (3,2)·(2,) là phép "tổng có trọng số" từng hàng — ứng dụng rất thực tế trong đề.',
    },
  ],
}