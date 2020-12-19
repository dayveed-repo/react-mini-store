
const initialState = {
    storee:[
        {id:1,title:'Nike airforce 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:90, img: ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/ckykef7ov0iiv3oo8fcg/air-force-1-07-shoe-yATkW1Bp.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdyuViyO_6A4MnWYdx7si8PPJCfhCpDyniA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3xFbK-qME7vzB6dEmS_E-JOMp0pZlpKZgTA&usqp=CAU"], quantity: 1, moreInfo: "With a Swoosh logo that changes from every direction you look at it, the Nike Air Force 1 '07 LV8 shifts perspectives. A swift colourway refreshes the legend while maintaining the same hoops-inspired performance features of the '82 OG."},

        {id:2,title:'Nike airmax 270', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:80, img: ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/b089e489-b1e5-4bf0-bc41-cc0168d65b02/air-max-270-react-se-shoe-NbMkqd.jpg", "https://i.pinimg.com/originals/2b/f3/c4/2bf3c447829bb533ade8907e8beef1ff.jpg", "https://ph-test-11.slatic.net/p/c9ae1684f50eed991521ba233ca4b8cd.jpg_340x340q80.jpg_.webp"], quantity: 1, moreInfo: "Nike's first lifestyle Air Max, the Nike Air Max 270, brings you style, comfort and big attitude. The design draws inspiration from Air Max icons, showcasing Nike's greatest innovation with its large window and fresh array of colours."},

        {id:3,title:'Nike airmax 720', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:85, img: ["https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/dqmkucvk3voc3uzojm8g/air-max-720-shoe-jJz2nr.jpg", "https://i.pinimg.com/originals/b9/be/8e/b9be8e158edd847f40959a733d668ba1.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpmJED2L4iXeONnMs1D6RnyOGLaW9OVAJBTQ&usqp=CAU"], quantity: 1, moreInfo: "The Nike Air Max 720 boasts the largest Max Air unit yet for a super-soft ride. Though it feels like you're walking on air, colours inspired by geology will bring you back down to Earth."},

        {id:4,title:'Nike jordan 1', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:100, img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOjm_xXlpVuJgzsA_zsW4JfzWaLm3lCFDuQ&usqp=CAU", "https://cdn.flightclub.com/750/TEMPLATE/164674/1.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrdZQLDqMUfw-sEqIIk8sx57jNYQ416thGg&usqp=CAU"], quantity: 1, moreInfo: "The Jordan AJ4 Graphic Fleece Trousers are cuffed around the ankles so they don't get in the way of your Js. They feature a sewn-on Flight patch and a bold, AJ4-inspired graphic down the leg"},

        {id:5,title:'Nike Jordan retro 4', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.", price:160, img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXdFj3jd15jJlzkA2h3YnsssQk58aU-FROvg&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa1ZPtr65Dl4XISG5g7C31nIcl2EbDXzImKw&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk5Yaa2jfmiQT2QY9KwNhSa7lYeyoxXfxZZg&usqp=CAU"], quantity: 1, moreInfo: "This timeless silhouette needs no introduction—but we'll break it down for those that don't know. Tinker Hatfield created the Air Jordan 11 to redefine limits, with a carbon-fibre plate for unrivalled performance and patent leather for an unprecedented touch of luxury. The inventive design debuted as MJ returned from his first retirement, putting the rest of the league (and the shoe game) on notice. Now, the look is back in a special make-up to officially mark the model's 25th anniversary", },

        {id:6,title:'Nike Jordan 14', desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",price:90, img: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWJ_qVTumxt3rUiwL-JX41FRi5AcaUzv6DyA&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8wzpY54e--7LwX2-e107IytxdmSRPIQ6QTQ&usqp=CAU", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8V5vSF3fo6hLa2JKq0BE7n1PtTr_kMp05Q&usqp=CAU"], quantity: 1, moreInfo: "This timeless silhouette needs no introduction—but we'll break it down for those that don't know. Tinker Hatfield created the Air Jordan 11 to redefine limits, with a carbon-fibre plate for unrivalled performance and patent leather for an unprecedented touch of luxury. The inventive design debuted as MJ returned from his first retirement, putting the rest of the league (and the shoe game) on notice. Now, the look is back in a special make-up to officially mark the model's 25th anniversary."}
    ],
    cartItem: [],
    total: 0,
    num_of_cartItems: 0,
    search: [],
    viewed_item: null,
    user: null,
}

const shopReducer = (state = initialState, action) => {
    const product = state.storee.find(item => item.id === action.payload)
    const incart = state.cartItem.find(item => item.id === action.payload)
    console.log(incart)
    switch(action.type){
        case "ADD_TO_CART":
            return {
                ...state,
                total: state.total + product.price,
                num_of_cartItems: state.num_of_cartItems + 1,
                cartItem: incart === undefined ? [...state.cartItem, product] : state.cartItem.map(item => item.id === action.payload ? { ...item, quantity: item.quantity + 1} : item
                )
            }
        case "REMOVE_ITEM":
            return {
                ...state,
                total: state.total - (incart.price*incart.quantity),
                num_of_cartItems: state.num_of_cartItems - incart.quantity,
                cartItem: state.cartItem.filter((item) => item.id !== action.payload),
            }
        case "INCREASE":
            return {
                ...state,
                total: state.total + incart.price,
                num_of_cartItems: state.num_of_cartItems + 1,
                cartItem: state.cartItem.map(item => item.id === action.payload ? {...item, quantity: item.quantity + 1} : item)
            }
        case "DECREASE":
            return {
                ...state,
                total: state.total - incart.price,
                num_of_cartItems: state.num_of_cartItems - 1,
                cartItem: state.cartItem.map(item => item.id === action.payload ? {...item, quantity: item.quantity - 1} : item)
            }
        case "VIEW":
            return {
                ...state,
                viewed_item: state.storee.filter( item => item.id === action.payload)[0],
            }
        case "LOGIN":
            return {
                ...state,
                user: action.payload,
            }
        case "LOGOUT":
            return {
                ...state,
                user: null,
            }
        default:
            return state
    }
}
export default shopReducer;
