export default {
  id: 'day4-data-processing',
  title: 'Quiz Xử lý dữ liệu',
  questions: [
    {
      id: 'dp1',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df.sort_values("age").iloc[0]["name"])`,
      options: ['Minh', 'Lan', 'Huy', 'Error'],
      answerIndex: 2,
      explanation: 'Sắp theo tuổi tăng dần: Huy (22), Minh (25), Lan (30). Hàng đầu là Huy.',
    },
    {
      id: 'dp2',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"city": ["HN", "HCM", "HN", "DN"], "sales": [10, 20, 30, 40]})
print(df.groupby("city")["sales"].mean())`,
      options: ['HN 20, HCM 20, DN 40', 'HN 40, HCM 20, DN 40', 'HN 20, HCM 20, DN 20', 'HN 10, HCM 20, DN 40'],
      answerIndex: 0,
      explanation: 'HN mean = (10+30)/2 = 20. HCM = 20. DN = 40.',
    },
    {
      id: 'dp3',
      type: 'multiple-choice',
      topic: 'Xử lý dữ liệu',
      question: 'df.drop_duplicates() làm gì?',
      options: ['Xóa hàng có giá trị thiếu', 'Xóa hàng trùng lặp', 'Sắp xếp dữ liệu', 'Đếm giá trị duy nhất'],
      answerIndex: 1,
      explanation: 'drop_duplicates() xóa các hàng trùng lặp chính xác.',
    },
    {
      id: 'dp4',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, 30, 22]})
print(df[df["age"] < 26].shape)`,
      options: ['(3, 2)', '(2, 2)', '(1, 2)', '(2, 1)'],
      answerIndex: 1,
      explanation: 'Lọc giữ lại tuổi < 26: Minh (25) và Huy (22) → 2 hàng.',
    },
    {
      id: 'dp5',
      type: 'output-prediction',
      topic: 'Xử lý dữ liệu',
      question: 'Kết quả là gì?',
      code: `import pandas as pd
df = pd.DataFrame({"name": ["Minh", "Lan", "Huy"], "age": [25, None, 22]})
print(df.dropna().shape)`,
      options: ['(3, 2)', '(2, 2)', '(1, 2)', '(2, 1)'],
      answerIndex: 1,
      explanation: 'dropna() xóa hàng có tuổi thiếu (Lan), còn 2 hàng.',
    },
    {
      id: 'dp6',
      type: 'multiple-choice',
      topic: 'Xử lý dữ liệu',
      question: 'value_counts() trả về gì?',
      options: ['Các giá trị duy nhất', 'Số lần xuất hiện của mỗi giá trị duy nhất', 'Trung bình mỗi cột', 'Dữ liệu đã sắp xếp'],
      answerIndex: 1,
      explanation: 'value_counts() trả về mỗi giá trị duy nhất xuất hiện bao nhiêu lần.',
    },
  ],
}
