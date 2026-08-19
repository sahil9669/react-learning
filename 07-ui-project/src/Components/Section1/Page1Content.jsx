import LeftContent from "./LeftContent"
import RightContent from "./RightContent"

const Page1Content = (props) => {
  return (
    <div className="px-18 py-10 gap-10 h-[90vh] flex items-center justify-between">
      <LeftContent/>
      <RightContent users={props.users}/>
    </div>
  )
}

export default Page1Content
