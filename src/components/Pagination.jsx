
import { ChevronsLeft, ChevronsRight} from 'lucide-react'
import { useDispatch, useSelector } from "react-redux";
import { handleInc, handleDec } from "../features/pageSlice";

const Pagination = () => {

  const dispatch = useDispatch()
  const pageNo = useSelector((state)=>state.page.pageNo)

  
    
  return (
    <div className='bg-gray-500/60 flex gap-3 justify-center items-center w-full max-w-xs sm:max-w-sm md:max-w-md m-auto p-2 sm:p-3 rounded-md'>
        <button onClick={() => dispatch(handleDec())}><ChevronsLeft size={28}/></button>
        <div className='font-bold text-base sm:text-lg'>{pageNo}</div>
        <button onClick={() => dispatch(handleInc())}><ChevronsRight size={28}/></button>
    </div>
  )
}

export default Pagination
