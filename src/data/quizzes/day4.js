export default {
  id: 'day4',
  title: 'Kiểm tra nhanh Ngày 4',
  questions: [
    {
      id: 'd4q1',
      type: 'output-prediction',
      topic: 'Pandas',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan"], "age": [25, 30]})
print(df.shape)`,
      options: ['(2, 2)', '(2,)', '(1, 2)', '(2, 1)'],
      answerIndex: 0,
      explanation: '2 hàng và 2 cột → shape (2, 2).',
    },
    {
      id: 'd4q2',
      type: 'multiple-choice',
      topic: 'Pandas',
      question: 'df.head() mặc định trả về gì?',
      options: ['Tất cả hàng', '5 hàng đầu', '5 hàng cuối', 'Cột đầu tiên'],
      answerIndex: 1,
      explanation: 'head() trả về 5 hàng đầu theo mặc định.',
    },
    {
      id: 'd4q3',
      type: 'multiple-choice',
      topic: 'Pandas',
      question: 'Khác biệt giữa loc và iloc là gì?',
      options: ['Không khác', 'loc dùng nhãn, iloc dùng vị trí', 'loc dùng vị trí, iloc dùng nhãn', 'loc cho cột, iloc cho hàng'],
      answerIndex: 1,
      explanation: 'loc chọn theo nhãn; iloc chọn theo vị trí (số thứ tự).',
    },
    {
      id: 'd4q4',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"age": [25, 30, 22]})
print(df[df["age"] > 24])`,
      options: ['[[25] [30]]', 'Các hàng có age 25 và 30', 'Các hàng có age 22', 'Tất cả hàng'],
      answerIndex: 1,
      explanation: 'Lọc giữ lại hàng có age > 24: các tuổi 25 và 30.',
    },
    {
      id: 'd4q5',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"city": ["HN", "HN", "HCM"]})
print(df["city"].value_counts())`,
      options: ['HN 2, HCM 1', 'HN 1, HCM 2', 'HN 3', 'HCM 3'],
      answerIndex: 0,
      explanation: 'value_counts() đếm số lần xuất hiện: HN 2 lần, HCM 1 lần.',
    },
    {
      id: 'd4q6',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Minh", "Lan"], "age": [25, 25, 30]})
print(df.drop_duplicates().shape)`,
      options: ['(3, 2)', '(2, 2)', '(1, 2)', '(2, 1)'],
      answerIndex: 1,
      explanation: 'drop_duplicates() bỏ hàng Minh trùng, còn 2 hàng.',
    },
    {
      id: 'd4q7',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"city": ["HN", "HCM", "HN"], "sales": [10, 20, 30]})
print(df.groupby("city")["sales"].sum())`,
      options: ['HN 40, HCM 20', 'HN 30, HCM 20', 'HN 10, HCM 20', 'HN 20, HCM 30'],
      answerIndex: 0,
      explanation: 'HN sales = 10 + 30 = 40. HCM sales = 20.',
    },
    {
      id: 'd4q8',
      type: 'multiple-choice',
      topic: 'Xử lý dữ liệu',
      question: 'dropna() làm gì?',
      options: ['Xóa hàng trùng lặp', 'Xóa hàng có giá trị thiếu', 'Sắp xếp dữ liệu', 'Đếm giá trị duy nhất'],
      answerIndex: 1,
      explanation: 'dropna() xóa các hàng chứa giá trị thiếu (NaN).',
    },
  ],
}
