import { useSelector } from 'react-redux'
import type { StateType } from '../store'
import type { PageInfoType } from '../store/pageInfoReducer'

function useGetPageInfo() {
  const pageInfo = useSelector<StateType>(state => state.pageInfo) as PageInfoType
  // console.log(pageInfo, 'info')
  /* {
    "title": "具精区基毛引且",
    "desc": "问卷描述",
    "js": "",
    "css": "",
    "isPublished": true
} */

  return pageInfo
}

export default useGetPageInfo
