import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { DAYS } from '../data/curriculum'
import { usePlaybook } from '../context/PlaybookContext'
import { useAccount } from '../context/AccountContext'

function NavItem({ to, label, done, end }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
    >
      <span>{label}</span>
      {done && <span className="nav-check">✓</span>}
    </NavLink>
  )
}

export default function Layout() {
  const { progress, percent, doneDays } = usePlaybook()
  const { activeUser, setActiveUser, accounts } = useAccount()
  const [open, setOpen] = useState(false)

  const nav = (
    <>
      <div className="nav-group">
        <div className="nav-label">Tổng quan</div>
        <NavItem to="/" label="Trang chủ" end />
        <NavItem to="/mock-exams" label="Đề thi thử" />
        <NavItem to="/quizzes" label="Ôn lỗi sai" />
      </div>

      <div className="nav-group">
        <div className="nav-label">Lộ trình 7 ngày</div>
        {DAYS.map((d) => (
          <NavItem
            key={d.day}
            to={d.path}
            label={`Ngày ${d.day} · ${d.title}`}
            done={doneDays.includes(d.day)}
          />
        ))}
      </div>

      <div className="nav-group">
        <div className="nav-label">Điều hướng nhanh</div>
        <NavItem to="/cheat-sheets" label="Tổng hợp công thức" />
        <NavItem to="/review" label="Ôn điểm yếu" />
      </div>
    </>
  )

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-logo">VA</div>
          <div className="brand-name">
            Vin AI Assessment Playbook
            <span>Vượt qua kỳ đánh giá trong 7 ngày</span>
          </div>
          <button className="btn btn-outline menu-toggle" onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>

        <div className="account-switcher">
          <div className="nav-label">Người dùng</div>
          <select
            className="account-select"
            value={activeUser.id}
            onChange={(e) => {
              const u = accounts.find((a) => a.id === e.target.value)
              if (u) setActiveUser(u)
            }}
            aria-label="Chọn tài khoản"
          >
            {accounts.map((a) => (
              <option key={a.id} value={a.id}>
                {a.name}
              </option>
            ))}
          </select>
          <div className="account-hint">Mỗi người có tiến độ riêng</div>
        </div>

        <div className="progress-label">
          <span>Tiến độ tổng thể</span>
          <span>{percent}%</span>
        </div>
        <div className="progress-track" style={{ marginBottom: '1rem' }}>
          <div className="progress-fill" style={{ width: `${percent}%` }} />
        </div>

        <div className={open ? '' : 'sidebar-collapse'}>{nav}</div>
      </aside>

      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}