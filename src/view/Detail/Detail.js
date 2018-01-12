import React ,{Component} from 'react'
import TitleHeader from '../../components/TitleHeader/TitleHeader'
import getData from '../../util/getData'
import './Detail.less'

class Detail extends Component{


    render(){
        return (
            <div className="Detail">
                <TitleHeader title={'曾经有一份真挚的爱情摆在我的面前，我却没有好好珍惜，如果上天能给我一次从来的机会，我会那个妹子说三个字：给我滚'} history={this.props.history}/>
            </div>
        )
    }
    
    componentDidMount() {
        const URL = `https://cnodejs.org/api/v1/topic/`
        let articleId = this.props.match.params.id
        getData.getDataByGet(URL+articleId)
        .then(data=>data.json())
        .then(json=>{
            console.log(json)
        })
        .catch(error=>{
            console.log(error)
        })
    }


}



export default Detail