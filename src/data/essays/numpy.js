// Ôn tập tự luận — NumPy (30 bài) · kiểu LeetCode (viết code), tính tay.
// Mỗi bài: đề bài + hàm cần viết (signature) + ví dụ input/output + lời giải mẫu.
export default {
  id: 'numpy',
  label: 'NumPy',
  order: 1,
  desc: '30 bài · viết code · tính tay',
  questions: [
    {
      id: 'np-l01',
      section: 'numpy',
      topic: 'Boolean mask',
      difficulty: 'Trung bình',
      problem: 'Viết hàm nhận mảng 1D `a` gồm các số nguyên, trả về mảng chỉ chứa các số CHẴN (giữ nguyên thứ tự).',
      signature: 'def evens(a: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'evens(np.array([1, 4, 3, 8, 2]))', output: 'array([4, 8, 2])' },
      ],
      constraints: '1 ≤ len(a) ≤ 6, mỗi phần tử là số nguyên 0–9 (dễ tính tay).',
      answerCode: `def evens(a):
    return a[a % 2 == 0]`,
      steps: [
        'a % 2 == 0 tạo boolean mask — đúng tại các vị trí số chẵn.',
        'a[mask] giữ lại đúng các phần tử đó theo thứ tự ban đầu.',
      ],
      edgeCases: 'Nếu không có số chẵn nào → trả về mảng rỗng (vẫn đúng kiểu ndarray).',
      tip: 'Filter bằng boolean mask là cách chuẩn của NumPy — không cần vòng lặp hay if.',
    },
    {
      id: 'np-l02',
      section: 'numpy',
      topic: 'Slicing & copy',
      difficulty: 'Trung bình',
      problem: 'Viết hàm trả về mảng MỚI có phần tử đầu và cuối bị hoán đổi cho nhau (các phần tử giữa không đổi; KHÔNG sửa mảng gốc).',
      signature: 'def swap_ends(a: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'swap_ends(np.array([1, 2, 3, 4, 5]))', output: 'array([5, 2, 3, 4, 1])' },
      ],
      constraints: 'len(a) ≥ 2.',
      answerCode: `def swap_ends(a):
    out = a.copy()
    out[0], out[-1] = out[-1], out[0]
    return out`,
      steps: [
        'copy() tạo bản sao độc lập để không sửa mảng gốc.',
        'Hoán đổi vị trí 0 và -1 trên bản sao rồi trả về.',
      ],
      edgeCases: 'Không copy thì gán out[0]=… sẽ sửa luôn mảng gốc vì chúng trỏ cùng vùng nhớ.',
      tip: 'Phép gán a = b KHÔNG copy — hai biến trỏ cùng mảng. Dùng .copy() khi cần bản riêng.',
    },
    {
      id: 'np-l03',
      section: 'numpy',
      topic: 'Slicing',
      difficulty: 'Trung bình',
      problem: 'Viết hàm trả về mảng còn lại sau khi LOẠI bỏ phần tử đầu tiên và phần tử cuối cùng.',
      signature: 'def remove_ends(a: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'remove_ends(np.array([10, 20, 30, 40, 50]))', output: 'array([20, 30, 40])' },
      ],
      constraints: 'len(a) ≥ 3.',
      answerCode: `def remove_ends(a):
    return a[1:-1]`,
      steps: [
        'Slice [1:-1]: bỏ phần tử vị trí 0 (đầu) và vị trí -1 (cuối).',
      ],
      edgeCases: 'len(a) == 3 trả về mảng đúng 1 phần tử.',
      tip: 'Slice luôn trả bản sao và không làm thay đổi mảng gốc.',
    },
    {
      id: 'np-l04',
      section: 'numpy',
      topic: 'Slice theo bước',
      difficulty: 'Trung bình',
      problem: 'Viết hàm trả về các phần tử ở VỊ TRÍ CHẴN (0, 2, 4, …) của mảng 1D.',
      signature: 'def every_other(a: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'every_other(np.array([1, 2, 3, 4, 5, 6]))', output: 'array([1, 3, 5])' },
      ],
      constraints: 'len(a) ≤ 8.',
      answerCode: `def every_other(a):
    return a[::2]`,
      steps: [
        '[::2] nghĩa là bắt đầu từ đầu, bước nhảy 2 → lấy chỉ số 0, 2, 4, …',
      ],
      edgeCases: 'Mảng rỗng trả về mảng rỗng.',
      tip: 'Cú pháp slice: start:stop:step.',
    },
    {
      id: 'np-l05',
      section: 'numpy',
      topic: 'Slice bước âm',
      difficulty: 'Trung bình',
      problem: 'Viết hàm trả về mảng đảo ngược thứ tự các phần tử.',
      signature: 'def reverse(a: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'reverse(np.array([1, 2, 3]))', output: 'array([3, 2, 1])' },
      ],
      constraints: 'len(a) ≤ 8.',
      answerCode: `def reverse(a):
    return a[::-1]`,
      steps: [
        '[::-1] dùng bước -1 để duyệt từ cuối về đầu → đảo toàn bộ.',
      ],
      tip: 'Cách đảo nhanh nhất trong NumPy — không cần vòng lặp.',
    },
    {
      id: 'np-l06',
      section: 'numpy',
      topic: 'Reduction theo axis',
      difficulty: 'Trung bình',
      problem: 'Viết hàm nhận ma trận 2D, trả về mảng 1D chứa TRUNG BÌNH của từng CỘT.',
      signature: 'def column_means(M: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'column_means(np.array([[1, 5], [2, 6], [3, 7]]))', output: 'array([2. , 6. ])' },
      ],
      constraints: 'Kích thước nhỏ (≤ 4×4), số nguyên 0–9.',
      answerCode: `def column_means(M):
    return M.mean(axis=0)`,
      steps: [
        'axis=0 → khử theo HÀNG → còn lại trung bình từng cột.',
        'Cột 0: (1+2+3)/3 = 2.0 · Cột 1: (5+6+7)/3 = 6.0.',
      ],
      edgeCases: 'Ma trận một cột trả về mảng 1 phần tử.',
      tip: 'Quy tắc axis: axis=0 → kết quả có độ dài = số cột.',
    },
    {
      id: 'np-l07',
      section: 'numpy',
      topic: 'Reduction theo axis',
      difficulty: 'Trung bình',
      problem: 'Viết hàm nhận ma trận 2D, trả về mảng 1D chứa TỔNG của từng HÀNG.',
      signature: 'def row_sums(M: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'row_sums(np.array([[1, 2], [3, 4], [5, 6]]))', output: 'array([ 3,  7, 11])' },
      ],
      constraints: 'Kích thước nhỏ (≤ 4×4), số nguyên 0–9.',
      answerCode: `def row_sums(M):
    return M.sum(axis=1)`,
      steps: [
        'axis=1 → khử theo CỘT → còn lại tổng từng HÀNG.',
        'Hàng 0: 1+2=3 · Hàng 1: 3+4=7 · Hàng 2: 5+6=11.',
      ],
      edgeCases: 'Ma trận một hàng trả về mảng 1 phần tử.',
      tip: 'Trái ngược với np-l06: axis=1 → độ dài kết quả = số hàng.',
    },
    {
      id: 'np-l08',
      section: 'numpy',
      topic: 'np.dot trọng số',
      difficulty: 'Khó',
      problem: 'Viết hàm tính điểm TRUNG BÌNH CÓ TRỌNG SỐ của từng học viên. Mỗi hàng `S` là (điểm giữa kỳ, điểm cuối kỳ); `w` là trọng số 2 phần tử. Trả về mảng 1D.',
      signature: 'def weighted_mean(S: np.ndarray, w: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'weighted_mean(np.array([[8, 6], [7, 9], [5, 8]]), np.array([0.4, 0.6]))', output: 'array([6.8, 8.2, 6.8])' },
      ],
      constraints: 'S có n hàng × 2 cột; tổng các trọng số bằng 1.',
      answerCode: `def weighted_mean(S, w):
    return np.dot(S, w)`,
      steps: [
        'np.dot(S, w) chấm từng HÀNG của S với w (2 phần tử).',
        'w[0] = 8·0.4 + 6·0.6 = 3.2 + 3.6 = 6.8.',
        'w[1] = 7·0.4 + 9·0.6 = 2.8 + 5.4 = 8.2 · w[2] = 2 + 4.8 = 6.8.',
      ],
      edgeCases: 'S shape (n,2) với w shape (2,) cho kết quả shape (n,) — hợp lệ.',
      tip: 'dot là "tổng có trọng số" theo từng hàng — ứng dụng rất thực tế trong đề.',
    },
    {
      id: 'np-l09',
      section: 'numpy',
      topic: 'Boolean mask đếm',
      difficulty: 'Trung bình',
      problem: 'Viết hàm đếm số phần tử của mảng 1D lớn hơn ngưỡng `t`.',
      signature: 'def count_above(a: np.ndarray, t: int) -> int:',
      examples: [
        { input: 'count_above(np.array([1, 5, 3, 8, 2]), 3)', output: '2' },
      ],
      constraints: 'len(a) ≤ 8, số nguyên 0–9.',
      answerCode: `def count_above(a, t):
    return (a > t).sum()`,
      steps: [
        'a > t → mảng boolean [F, T, F, T, F].',
        '.sum() đếm số True (True tính như 1) → 2.',
      ],
      edgeCases: 'Nếu không phần tử nào thoả → trả 0.',
      tip: 'Nhiều đề ra dạng "đếm số phần tử thoả điều kiện" — luôn dùng (mask).sum().',
    },
    {
      id: 'np-l10',
      section: 'numpy',
      topic: 'np.where',
      difficulty: 'Trung bình',
      problem: 'Write a function returning a copy where every NEGATIVE element is replaced by 0 (positives unchanged).',
      signature: 'def zero_negatives(a: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'zero_negatives(np.array([3, -1, 0, -4, 7]))', output: 'array([3, 0, 0, 0, 7])' },
      ],
      constraints: 'len(a) ≤ 8, số nguyên −9..9.',
      answerCode: `def zero_negatives(a):
    return np.where(a < 0, 0, a)`,
      steps: [
        'np.where(mask, giá-trị-đúng, giá-trị-sai).',
        'a < 0 → thay bằng 0; ngược lại giữ nguyên a.',
      ],
      edgeCases: '0 không phải số âm nên được giữ nguyên.',
      tip: 'np.where là cách if-else vector hoá trên từng phần tử.',
    },
    {
      id: 'np-l11',
      section: 'numpy',
      topic: 'Boolean kết hợp',
      difficulty: 'Khó',
      problem: 'Viết hàm đếm các phần tử vừa DƯƠNG vừa chia hết cho 2 (số chẵn dương).',
      signature: 'def count_pos_even(a: np.ndarray) -> int:',
      examples: [
        { input: 'count_pos_even(np.array([-4, 2, 3, 6, 0, 8]))', output: '3' },
      ],
      constraints: 'len(a) ≤ 8, số nguyên −9..9.',
      answerCode: `def count_pos_even(a):
    return ((a > 0) & (a % 2 == 0)).sum()`,
      steps: [
        'Tạo hai mask: a > 0 và a % 2 == 0.',
        'Kết hợp bằng & (phải có ngoặc cho từng mask).',
        'Đếm True: phần tử 2, 6, 8 → 3.',
      ],
      edgeCases: 'Cần dùng & (bitwise) chứ không phải and cho hai mảng boolean.',
      tip: '0 không cộng dồn vì không > 0 — đây là bẫy hay gặp.',
    },
    {
      id: 'np-l12',
      section: 'numpy',
      topic: 'argmax',
      difficulty: 'Trung bình',
      problem: 'Viết hàm trả về CHỈ SỐ của phần tử LỚN NHẤT trong mảng 1D (nếu trùng, trả chỉ số đầu tiên).',
      signature: 'def argmax_index(a: np.ndarray) -> int:',
      examples: [
        { input: 'argmax_index(np.array([5, 9, 2, 9, 1]))', output: '1' },
      ],
      constraints: 'len(a) ≤ 8, số nguyên 0–9.',
      answerCode: `def argmax_index(a):
    return a.argmax()`,
      steps: [
        'arr[max] là VỊ TRÍ (chỉ số) của giá trị lớn nhất.',
        'Giá trị lớn nhất 9 xuất hiện đầu tiên ở chỉ số 1.',
      ],
      edgeCases: 'argmax trả về CHỈ SỐ chứ không phải giá trị.',
      tip: 'Đừng nhầm value vs index — đề hay hỏi cái này.',
    },
    {
      id: 'np-l13',
      section: 'numpy',
      topic: 'max & argmax',
      difficulty: 'Khó',
      problem: 'Viết hàm trả về một tuple `(giá trị lớn nhất, chỉ số của nó)` trong mảng 1D.',
      signature: 'def max_and_idx(a: np.ndarray):',
      examples: [
        { input: 'max_and_idx(np.array([3, 8, 2, 8]))', output: '(8, 1)' },
      ],
      constraints: 'len(a) ≤ 8, số nguyên 0–9.',
      answerCode: `def max_and_idx(a):
    return (a.max(), a.argmax())`,
      steps: [
        'a.max() = giá trị lớn nhất = 8.',
        'a.argmax() = chỉ số đầu tiên đạt max = 1.',
      ],
      edgeCases: 'argmax trả chỉ số ĐẦU TIÊN khi có phần tử trùng giá trị max.',
      tip: 'Ghép hai phép reduce có thể làm trong một tuple kết quả.',
    },
    {
      id: 'np-l14',
      section: 'numpy',
      topic: 'Normalize',
      difficulty: 'Khó',
      problem: 'Write a function that scales an array so its values land in [0, 1] using min–max scaling (x − min)/(max − min).',
      signature: 'def normalize(a: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'normalize(np.array([2, 4, 6]))', output: 'array([0. , 0.5, 1. ])' },
      ],
      constraints: 'len(a) ≤ 8, không phải mảng hằng số.',
      answerCode: `def normalize(a):
    return (a - a.min()) / (a.max() - a.min())`,
      steps: [
        'min = 2, max = 6 → hiệu = 4.',
        '(2-2)/4=0 · (4-2)/4=0.5 · (6-2)/4=1.0.',
      ],
      edgeCases: 'Nếu max == min (mảng hằng), mẫu số bằng 0 → cần xử lý riêng.',
      tip: 'Min-max scaling là câu hỏi preprocessing rất phổ biến.',
    },
    {
      id: 'np-l15',
      section: 'numpy',
      topic: 'Centering',
      difficulty: 'Trung bình',
      problem: 'Viết hàm trả về mảng đã TRỪ đi giá trị trung bình của nó (center theo mean).',
      signature: 'def center_mean(a: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'center_mean(np.array([1, 2, 3]))', output: 'array([-1. ,  0. ,  1. ])' },
      ],
      constraints: 'len(a) ≤ 8, số nguyên 0–9.',
      answerCode: `def center_mean(a):
    return a - a.mean()`,
      steps: [
        'mean = (1+2+3)/3 = 2.0.',
        '1-2=-1 · 2-2=0 · 3-2=1.',
      ],
      tip: 'Phép toán NumPy tự broadcast số vô hướng với mọi phần tử.',
    },
    {
      id: 'np-l16',
      section: 'numpy',
      topic: 'Elementwise',
      difficulty: 'Trung bình',
      problem: 'Viết hàm trả về mảng bình phương từng phần tử (KHÔNG dùng vòng lặp).',
      signature: 'def squares(a: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'squares(np.array([1, 2, 3, 4]))', output: 'array([ 1,  4,  9, 16])' },
      ],
      constraints: 'len(a) ≤ 8, số nguyên 0–9.',
      answerCode: `def squares(a):
    return a ** 2`,
      steps: [
        'Toán tử ** trên mảng NumPy áp dụng elementwise.',
        '1, 4, 9, 16.',
      ],
      tip: 'Phép toán số học trong NumPy luôn elementwise.',
    },
    {
      id: 'np-l17',
      section: 'numpy',
      topic: 'Broadcast dòng',
      difficulty: 'Khó',
      problem: 'Viết hàm cộng một mảng 1D `row` vào TỪNG HÀNG của ma trận 2D `M` (mỗi hàng tăng thêm `row`).',
      signature: 'def add_row(M: np.ndarray, row: np.ndarray) -> np.ndarray:',
      examples: [
        { input: "add_row(np.array([[1, 2], [3, 4]]), np.array([10, 20]))", output: 'array([[11, 22],\n       [13, 24]])' },
      ],
      constraints: 'len(row) == M.shape[1].',
      answerCode: `def add_row(M, row):
    return M + row`,
      steps: [
        'M shape (2,2), row shape (2,) → broadcast: row được cộng vào mỗi hàng.',
        'Hàng 1: [1+10, 2+20]=[11,22] · Hàng 2: [13,24].',
      ],
      edgeCases: 'Số cột của M phải khớp độ dài row, nếu không sẽ lỗi broadcast.',
      tip: 'Cộng vector 1D vào ma trận → tự áp dụng theo từng hàng.',
    },
    {
      id: 'np-l18',
      section: 'numpy',
      topic: 'Broadcast cột',
      difficulty: 'Khó',
      problem: 'Viết hàm trả về mỗi CỘT của ma trận 2D `M` được cộng thêm một giá trị riêng từ `col` (shape (n,1)).',
      signature: 'def add_column(M: np.ndarray, col: np.ndarray) -> np.ndarray:',
      examples: [
        { input: "add_column(np.array([[1, 2], [3, 4], [5, 6]]), np.array([[10], [20], [30]]))", output: 'array([[11, 12],\n       [23, 24],\n       [35, 36]])' },
      ],
      constraints: 'col.shape == (M.shape[0], 1).',
      answerCode: `def add_column(M, col):
    return M + col`,
      steps: [
        'col shape (n,1) broadcast theo cột: mỗi HÀNG i cộng col[i] cho cả dòng.',
        'Hàng 0: +10 → [11,12] · Hàng 1: +20 → [23,24] · Hàng 2: +30 → [35,36].',
      ],
      edgeCases: 'col phải là (n,1) chứ không phải (n,) thì mới cộng đúng theo cột.',
      tip: 'Shape (n,1) cộng với (n,m): giá trị riêng theo từng hàng; shape (m,) cộng theo cột (xem np-l17).',
    },
    {
      id: 'np-l19',
      section: 'numpy',
      topic: 'Transpose',
      difficulty: 'Trung bình',
      problem: 'Viết hàm nhận ma trận 2D và trả về ma trận CHUYỂN VỊ (đổi hàng ↔ cột).',
      signature: 'def transpose(M: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'transpose(np.array([[1, 2], [3, 4]]))', output: 'array([[1, 3],\n       [2, 4]])' },
      ],
      constraints: 'Kích thước nhỏ (≤ 4×4).',
      answerCode: `def transpose(M):
    return M.T`,
      steps: [
        'M.T (hoặc M.transpose()) đổi hàng thành cột.',
        '[1,2] trở thành cột 1; [3,4] trở thành cột 2.',
      ],
      edgeCases: 'Shape đổi (n,m) → (m,n); ma trận vuông giữ nguyên shape.',
      tip: 'Chuyển vị không làm thay đổi số phần tử, chỉ thay đổi cách sắp xếp.',
    },
    {
      id: 'np-l20',
      section: 'numpy',
      topic: 'Reshape',
      difficulty: 'Khó',
      problem: 'Viết hàm reshape mảng 1D thành ma trận có đúng `rows` hàng; số cột tự suy ra (dùng -1).',
      signature: 'def reshape_rows(a: np.ndarray, rows: int) -> np.ndarray:',
      examples: [
        { input: 'reshape_rows(np.array([1, 2, 3, 4, 5, 6]), 2)', output: 'array([[1, 2, 3],\n       [4, 5, 6]])' },
      ],
      constraints: 'len(a) chia hết cho rows.',
      answerCode: `def reshape_rows(a, rows):
    return a.reshape(rows, -1)`,
      steps: [
        'reshape(rows, -1): -1 tự suy ra số cột = 6 / 2 = 3.',
        'Xếp lần lượt theo hàng.',
      ],
      edgeCases: 'Nếu len(a) không chia hết cho rows → ValueError.',
      tip: '-1 giúp không phải tính tay số cột — rất hay dùng trong preprocessing.',
    },
    {
      id: 'np-l21',
      section: 'numpy',
      topic: 'Flatten',
      difficulty: 'Trung bình',
      problem: 'Viết hàm làm PHẲNG ma trận 2D thành mảng 1D (đọc theo thứ tự hàng).',
      signature: 'def flatten_matrix(M: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'flatten_matrix(np.array([[1, 2], [3, 4]]))', output: 'array([1, 2, 3, 4])' },
      ],
      constraints: 'Kích thước nhỏ (≤ 4×4).',
      answerCode: `def flatten_matrix(M):
    return M.flatten()`,
      steps: [
        '.flatten() trải về 1D theo thứ tự hàng (row-major).',
      ],
      edgeCases: 'flatten trả bản sao; reshape(-1) cũng làm tương tự.',
      tip: 'Có thể dùng M.reshape(-1) như cách viết thay thế.',
    },
    {
      id: 'np-l22',
      section: 'numpy',
      topic: 'Stack hàng',
      difficulty: 'Trung bình',
      problem: 'Viết hàm ghép hai ma trận `X` và `Y` theo HÀNG (xếp chồng dọc) — cùng số cột.',
      signature: 'def stack_vertical(X: np.ndarray, Y: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'stack_vertical(np.array([[1, 2]]), np.array([[3, 4], [5, 6]]))', output: 'array([[1, 2],\n       [3, 4],\n       [5, 6]])' },
      ],
      constraints: 'Hai ma trận cùng số cột.',
      answerCode: `def stack_vertical(X, Y):
    return np.vstack([X, Y])`,
      steps: [
        'np.vstack (hoặc np.concatenate axis=0) xếp X rồi Y theo hàng.',
        'Kết quả 3 hàng.',
      ],
      edgeCases: 'Số cột không khớp sẽ báo lỗi.',
      tip: 'vstack = thêm HÀNG; hstack = thêm CỘT (xem câu tiếp).',
    },
    {
      id: 'np-l23',
      section: 'numpy',
      topic: 'Stack cột',
      difficulty: 'Trung bình',
      problem: 'Viết hàm ghép hai ma trận `X` và `Y` theo CỘT (xếp cạnh nhau ngang) — cùng số hàng.',
      signature: 'def stack_horizontal(X: np.ndarray, Y: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'stack_horizontal(np.array([[1, 2], [3, 4]]), np.array([[10], [20]]))', output: 'array([[ 1,  2, 10],\n       [ 3,  4, 20]])' },
      ],
      constraints: 'Hai ma trận cùng số hàng.',
      answerCode: `def stack_horizontal(X, Y):
    return np.hstack([X, Y])`,
      steps: [
        'np.hstack xếp cạnh nhau theo cột.',
        'Mỗi hàng gộp thêm giá trị từ Y.',
      ],
      edgeCases: 'Số hàng không khớp sẽ báo lỗi.',
      tip: 'hstack thường dùng để nối feature (thêm cột đặc trưng).',
    },
    {
      id: 'np-l24',
      section: 'numpy',
      topic: 'Det & khả nghịch',
      difficulty: 'Khó',
      problem: 'Viết hàm trả về `True` nếu ma trận 2×2 KHẢ NGHỊCH (có nghịch đảo), `False` nếu không.',
      signature: 'def invertible(M: np.ndarray) -> bool:',
      examples: [
        { input: 'invertible(np.array([[2, 1], [1, 3]]))', output: 'True' },
        { input: 'invertible(np.array([[1, 2], [2, 4]]))', output: 'False' },
      ],
      constraints: 'Ma trận 2×2, phần tử số nguyên 0–9.',
      answerCode: `def invertible(M):
    return np.linalg.det(M) != 0`,
      steps: [
        'Ma trận khả nghịch khi định thức ≠ 0.',
        'Ma trận 1: det = 2·3 − 1·1 = 5 ≠ 0 → True.',
        'Ma trận 2: det = 1·4 − 2·2 = 0 → False (2 hàng tỉ lệ).',
      ],
      edgeCases: 'Biến thể: cũng có thể so sánh bằng cách thử np.linalg.inv nhưng det rẻ hơn.',
      tip: 'det = 0 ⇔ suy biến ⇔ không có nghịch đảo.',
    },
    {
      id: 'np-l25',
      section: 'numpy',
      topic: 'np.linalg.inv',
      difficulty: 'Khó',
      problem: 'Viết hàm nhận ma trận 2×2 khả nghịch, trả về ma trận NGHỊCH ĐẢO của nó.',
      signature: 'def invert_2x2(M: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'invert_2x2(np.array([[2, 1], [1, 3]]))', output: 'array([[ 0.6, -0.2],\n       [-0.2,  0.4]])' },
      ],
      constraints: 'Ma trận 2×2 có det ≠ 0.',
      answerCode: `def invert_2x2(M):
    return np.linalg.inv(M)`,
      steps: [
        'det = 2·3 − 1·1 = 5.',
        'M⁻¹ = 1/5 · [[3, -1], [-1, 2]] = [[0.6, -0.2], [-0.2, 0.4]].',
      ],
      edgeCases: 'Chỉ áp dụng khi det ≠ 0; các giá trị hiển thị là float.',
      tip: 'Cứ nhớ [[a,b],[c,d]]⁻¹ = 1/(ad−bc)·[[d,−b],[−c,a]].',
    },
    {
      id: 'np-l26',
      section: 'numpy',
      topic: 'Trace',
      difficulty: 'Trung bình',
      problem: 'Viết hàm trả về TỔNG ĐƯỜNG CHÉO CHÍNH (trace) của ma trận vuông.',
      signature: 'def trace(M: np.ndarray) -> float:',
      examples: [
        { input: 'trace(np.array([[3, 1], [1, 5]]))', output: '8' },
      ],
      constraints: 'Ma trận vuông, phần tử số nguyên 0–9.',
      answerCode: `def trace(M):
    return np.trace(M)`,
      steps: [
        'Đường chéo chính là các phần tử M[0,0], M[1,1], …',
        'trace = 3 + 5 = 8.',
      ],
      edgeCases: 'Nhớ: tổng trị riêng của ma trận bằng đúng trace.',
      tip: 'Liên hệ quan trọng: sum(eigvals) = trace.',
    },
    {
      id: 'np-l27',
      section: 'numpy',
      topic: 'np.eye',
      difficulty: 'Trung bình',
      problem: 'Write a function returning the n×n identity matrix.',
      signature: 'def identity_matrix(n: int) -> np.ndarray:',
      examples: [
        { input: 'identity_matrix(3)', output: 'array([[1., 0., 0.],\n       [0., 1., 0.],\n       [0., 0., 1.]])' },
      ],
      constraints: '1 ≤ n ≤ 5.',
      answerCode: `def identity_matrix(n):
    return np.eye(n)`,
      steps: [
        'np.eye(n) đặt 1 trên đường chéo chính, 0 ở mọi chỗ khác.',
      ],
      edgeCases: 'Ma trận đơn vị là phần tử trung hoà của phép nhân ma trận: A·I = I·A = A.',
      tip: 'np.eye khác np.ones — ones là toàn 1, eye chỉ đường chéo.',
    },
    {
      id: 'np-l28',
      section: 'numpy',
      topic: 'linspace',
      difficulty: 'Khó',
      problem: 'Viết hàm trả về `num` điểm cách đều từ `start` đến `stop` (BAO GỒM cả hai đầu).',
      signature: 'def linspace_points(start: float, stop: float, num: int) -> np.ndarray:',
      examples: [
        { input: 'linspace_points(0, 10, 5)', output: 'array([ 0. ,  2.5,  5. ,  7.5, 10. ])' },
      ],
      constraints: 'num ≥ 2.',
      answerCode: `def linspace_points(start, stop, num):
    return np.linspace(start, stop, num)`,
      steps: [
        'Bước = (stop − start) / (num − 1) = 10 / 4 = 2.5.',
        'Dãy: 0, 2.5, 5, 7.5, 10 — điểm cuối được bao.',
      ],
      edgeCases: 'Khác arange (theo bước, không hẳn bao điểm cuối): linspace luôn bao cả hai đầu.',
      tip: 'Công thức bước: (stop − start) / (num − 1).',
    },
    {
      id: 'np-l29',
      section: 'numpy',
      topic: 'Mask 2D thu gọn',
      difficulty: 'Khó',
      problem: 'Viết hàm trả về mảng 1D chứa các phần tử DƯƠNG của ma trận 2D (mọi phần tử ≤ 0 bị loại bỏ).',
      signature: 'def collect_positive(M: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'collect_positive(np.array([[1, -2], [3, 0]]))', output: 'array([1, 3])' },
      ],
      constraints: 'Kích thước nhỏ (≤ 4×4), số nguyên −9..9.',
      answerCode: `def collect_positive(M):
    return M[M > 0]`,
      steps: [
        'M > 0 tạo boolean mask cùng shape.',
        'M[mask] với mask 2D trả về mảng 1D — chỉ giữ phần tử đúng.',
        'Phần tử 1 và 3 dương; 0 không dương nên bị loại.',
      ],
      edgeCases: 'Indexing bằng mask 2D luôn làm phẳng kết quả về 1D.',
      tip: 'Đây là cách "lọc" chuẩn trên mảng nhiều chiều.',
    },
    {
      id: 'np-l30',
      section: 'numpy',
      topic: 'Normalize theo hàng',
      difficulty: 'Khó',
      problem: 'Viết hàm chuẩn hoá từng HÀNG bằng cách chia mỗi hàng cho GIÁ TRỊ LỚN NHẤT của chính hàng đó.',
      signature: 'def normalize_rows(M: np.ndarray) -> np.ndarray:',
      examples: [
        { input: 'normalize_rows(np.array([[2, 4], [3, 6]]))', output: 'array([[0.5, 1. ],\n       [0.5, 1. ]])' },
      ],
      constraints: 'Kích thước nhỏ (≤ 4×4).',
      answerCode: `def normalize_rows(M):
    return M / M.max(axis=1, keepdims=True)`,
      steps: [
        'max mỗi hàng: hàng 0 = 4, hàng 1 = 6.',
        'keepdims=True giữ shape (n,1) để broadcast chia đúng theo hàng.',
        'Hàng 0: [2/4, 4/4] = [0.5, 1] · Hàng 1: [3/6, 6/6] = [0.5, 1].',
      ],
      edgeCases: 'Nếu thiếu keepdims, max(axis=1) có shape (n,) và chia sai hướng.',
      tip: 'keepdims gần như luôn cần thiết khi kết hợp reduction theo axis với phép chia/broadcast.',
    },
  ],
}