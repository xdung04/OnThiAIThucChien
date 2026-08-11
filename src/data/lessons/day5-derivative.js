export default {
  slug: 'day5-derivative',
  title: 'Đạo hàm & Gradient',
  subtitle: 'Đạo hàm là độ dốc; gradient cho biết hướng tăng/giảm',
  module: 'Module C · Kiến thức AI',
  time: '12 phút',
  difficulty: 'Easy',
  importance: 'High',
  assessmentTip: 'Nhớ đạo hàm của x² là 2x, của 3x² + 2x là 6x + 2. Đạo hàm dương nghĩa là hàm đang tăng; âm nghĩa là hàm đang giảm.',
  quizId: 'day5-derivative',
  objectives: [
    'Hiểu đạo hàm = độ dốc (slope) của hàm',
    'Tính đạo hàm của x², 3x² + 2x',
    'Xác định gradient dương hay âm',
    'Biết đạo hàm dương/âm thể hiện hàm tăng/giảm',
  ],
  whatIsIt: [
    'Đạo hàm của một hàm tại một điểm cho biết độ dốc của đồ thị tại điểm đó.',
    'Độ dốc dương → hàm đang tăng; độ dốc âm → hàm đang giảm.',
    'Trong ML, đạo hàm được gọi là gradient và dùng để cập nhật tham số.',
  ],
  whyImportant: [
    'Khái niệm đạo hàm/gradient xuất hiện trong câu hỏi về học máy và gradient descent.',
    'Kỳ đánh giá có thể hỏi tính đạo hàm của hàm đơn giản.',
    'Biết dấu của gradient giúp trả lời hướng cập nhật tham số.',
  ],
  keyConcepts: [
    'Đạo hàm = độ dốc (slope) của hàm',
    'Đạo hàm của hằng số = 0',
    'Đạo hàm của x = 1',
    'Đạo hàm của x² = 2x',
    'Đạo hàm của 3x² + 2x = 6x + 2 (đạo hàm từng hạng tử)',
    'Gradient dương → hàm tăng; gradient âm → hàm giảm',
  ],
  examples: [
    {
      code: `# Đạo hàm - quy tắc cơ bản (không chạy được)
# d/dx (c)   = 0        (hang so)
# d/dx (x)   = 1
# d/dx (x^2) = 2x
# d/dx (3x^2 + 2x) = 6x + 2`,
      note: 'Tính đạo hàm từng hạng tử rồi cộng lại. Nhân hệ số với số mũ, rồi giảm số mũ đi 1.',
    },
    {
      code: `# Gia tri dao ham tai mot diem
# f(x) = x^2  ->  f'(x) = 2x
# f'(3) = 2*3 = 6  (duong -> ham dang tang tai x=3)
# f(x) = 3x^2 + 2x -> f'(x) = 6x + 2
# f'(0) = 2 (duong); f'(-1) = -4 (am -> ham dang giam)`,
      note: 'Thay x vào đạo hàm để biết độ dốc tại điểm đó; dấu cho biết hàm tăng hay giảm.',
    },
  ],
  assessmentQs: [
    'Đạo hàm của x² là gì?',
    'Đạo hàm của 3x² + 2x là gì?',
    'Đạo hàm tại một điểm cho biết điều gì?',
    'Nếu gradient dương, hàm đang làm gì?',
    'Đạo hàm của một hằng số bằng bao nhiêu?',
  ],
  mistakes: [
    'Quên nhân hệ số với số mũ khi lấy đạo hàm.',
    'Nghĩ đạo hàm của x² là x thay vì 2x.',
    'Quên giảm số mũ đi 1.',
    'Nhầm dấu: gradient âm nghĩa là hàm đang giảm, không phải tăng.',
    'Lấy đạo hàm của hằng số ra giá trị khác 0.',
  ],
  summary: [
    'Đạo hàm = độ dốc (slope).',
    'x² → 2x; 3x² + 2x → 6x + 2; hằng số → 0.',
    'Gradient dương → hàm tăng; âm → hàm giảm.',
    'Đạo hàm của Cost chính là Gradient dùng trong Gradient Descent (để cập nhật tham số).',
  ],
  cheatSheet: [
    { term: 'Đạo hàm', def: 'độ dốc (slope) của hàm' },
    { term: 'd/dx (c)', def: '0 (hằng số)' },
    { term: 'd/dx (x)', def: '1' },
    { term: 'd/dx (x²)', def: '2x' },
    { term: 'd/dx (3x²+2x)', def: '6x + 2' },
    { term: 'Gradient dương', def: 'hàm đang tăng' },
    { term: 'Gradient âm', def: 'hàm đang giảm' },
    { term: 'Trong ML', def: 'đạo hàm của Cost = Gradient (input của Gradient Descent)' },
  ],
}
