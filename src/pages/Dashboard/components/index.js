import { Col, Row } from "antd"
import * as S from "./styles"
import BalanceCard from "./BalanceCard"
import SvgIcon from "../../../common/SvgIcon"
import { useUserContext } from "../../../context/UserContext"

const Dashboard = () => {
  const {
    user: { wallet, user },
  } = useUserContext()
  return (
    <S.DashboardContainer>
      <Col lg={10} md={12} sm={24} xs={24} className="margin-auto"></Col>
      <h6>{user && user.fullname} Dashboard</h6>
      <BalanceCard balance={(wallet && wallet.balance) || ""} />
      <Row align="middle" justify="center" className="mt-3">
        <S.Span color="#000">Products</S.Span>
        <S.NavLink to="/dashboard/post-a-deal">
          <S.Span color="inherit" padding="4px 0 4px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </S.Span>
        </S.NavLink>
      </Row>

      <S.ProductContainer>
        <SvgIcon src="activity.svg" width="80px" height="80px" />
        <S.Span>&#183; No product up for sale &#183;</S.Span>
      </S.ProductContainer>
      {/* product listing */}
    </S.DashboardContainer>
  )
}

export default Dashboard
