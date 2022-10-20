import {data} from '../helpers/data'
import Card from './Card';
const Main = () => {
  return (
    <div>
        {
            data.map((each)=>{
                // const {id,title,desc,image} = each
                return(
                    <Card key={each.id} {...each}/>
                    // <Card key={id} baslik={title}/>
                )
            })
        }
    </div>
  )
}

export default Main