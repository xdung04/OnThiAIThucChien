export default {
  slug: 'day3-statistics',
  title: 'Thống kê cơ bản',
  subtitle: 'Trung bình, trung vị, mode, phương sai và độ lệch chuẩn',
  module: 'Module A · Toán học',
  time: '12 phút',
  difficulty: 'Beginner',
  importance: 'High',
  assessmentTip: 'Tập trung hiểu mỗi đại lượng thống kê đo lường gì và cách đọc kết quả NumPy/Python. Không cần chứng minh công thức.',
  quizId: 'day3-statistics',
  objectives: [
    'Hiểu trung bình, trung vị, mode, phương sai và độ lệch chuẩn',
    'Đọc kết quả Python/NumPy cho các đại lượng này',
    'Biết đại lượng nào bị ảnh hưởng nhiều nhất bởi outlier (giá trị ngoại lai)',
  ],
  whatIsIt: [
    'Thống kê tóm tắt một tập hợp các con số.',
    'Trung bình (mean) là giá trị trung bình; trung vị (median) là giá trị giữa.',
    'Mode là giá trị xuất hiện nhiều nhất.',
    'Phương sai và độ lệch chuẩn đo mức độ phân tán của dữ liệu.',
  ],
  whyImportant: [
    'Thống kê cơ bản là chủ đề được xác nhận.',
    'Câu hỏi có thể đưa dữ liệu và hỏi trung bình hoặc trung vị.',
    'Hiểu độ phân tán (phương sai/std) giúp trả lời câu hỏi diễn giải.',
  ],
  keyConcepts: [
    'Trung bình: tổng giá trị chia số lượng',
    'Trung vị: giá trị giữa khi đã sắp xếp',
    'Mode: giá trị xuất hiện nhiều nhất',
    'Phương sai: trung bình của bình phương độ lệch so với trung bình',
    'Độ lệch chuẩn: căn bậc hai của phương sai',
    'Độ lệch chuẩn cùng đơn vị với dữ liệu',
  ],
  examples: [
    {
      code: `import numpy as np
data = np.array([2, 4, 4, 4, 5, 5, 7, 9])
print(data.mean())   # 5.0
print(np.median(data))  # 4.5
print(np.std(data))     # 2.0`,
      note: 'mean = 5.0, median = 4.5, std = 2.0.',
    },
    {
      code: `from collections import Counter
data = [1, 2, 2, 3, 3, 3, 4]
counts = Counter(data)
print(counts.most_common(1))  # [(3, 3)]`,
      note: 'Mode là 3 — xuất hiện nhiều nhất (3 lần).',
    },
    {
      code: `import numpy as np
data = np.array([1, 2, 3, 4, 5])
print(data.var())   # 2.0
print(data.std())   # 1.414...`,
      note: 'Phương sai là trung bình độ lệch bình phương; std là căn bậc hai của nó.',
    },
    {
      code: `# Tinh tay phuong sai va std cua [1, 2, 3, 4, 5]
# 1) mean = (1+2+3+4+5)/5 = 3
# 2) deviation: -2, -1, 0, 1, 2
# 3) binh phuong: 4, 1, 0, 1, 4
# 4) variance = (4+1+0+1+4)/5 = 10/5 = 2.0
# 5) std = sqrt(2.0) ~ 1.414`,
      note: 'Các bước tay: mean → deviation → bình phương → trung bình (variance) → căn bậc hai (std).',
    },
  ],
  assessmentQs: [
    'Trung bình của danh sách đã cho là gì?',
    'Trung vị của danh sách đã cho là gì?',
    'Mode của danh sách đã cho là gì?',
    'Cái nào bị ảnh hưởng bởi outlier nhiều hơn: mean hay median?',
    'Độ lệch chuẩn đo lường điều gì?',
  ],
  mistakes: [
    'Nhầm mean với median.',
    'Quên sắp xếp trước khi tìm median.',
    'Nghĩ mode là trung bình — thực ra nó là giá trị xuất hiện nhiều nhất.',
    'Nhầm phương sai với độ lệch chuẩn.',
    'Quên rằng outlier kéo mean nhiều hơn median.',
  ],
  summary: [
    'Mean = trung bình; median = giá trị giữa; mode = xuất hiện nhiều nhất.',
    'Phương sai và std đo độ phân tán.',
    'Std là căn bậc hai của phương sai.',
    'Outlier ảnh hưởng mean nhiều hơn median.',
  ],
  cheatSheet: [
    { term: 'mean', def: 'tổng / số lượng' },
    { term: 'median', def: 'giá trị giữa khi sắp xếp' },
    { term: 'mode', def: 'giá trị xuất hiện nhiều nhất' },
    { term: 'variance', def: 'trung bình bình phương độ lệch so với mean' },
    { term: 'std', def: 'căn bậc hai của phương sai' },
    { term: 'np.median()', def: 'trung vị trong NumPy' },
    { term: 'data.var()', def: 'phương sai' },
    { term: 'data.std()', def: 'độ lệch chuẩn' },
  ],
}
