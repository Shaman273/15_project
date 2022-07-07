import {useState, useEffect} from 'react'
import Blog from '../../componet/Blog'
import {Button, Modal, Input} from "antd"
import axios from "axios"

function Blogs() {
    const [blogs, setBlogs] = useState([
        {
            title: 'Blog 1',
            desc: 'Blog desc 1'
        },
        {
            title: 'Blog 2',
            desc: 'Blog desc 2'
        },
        {
            title: 'Blog 3',
            desc: 'Blog desc 3'
        },
    ])
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [blog, setBlog] = useState({title: "", desc: ""})

    useEffect(() => {
        axios.get('https://api.artic.edu/api/v1/artworks').then(res =>
       setBlogs(res.data.data.map(item => {
        return {
            title: item.title,
            desc: item.credit_line,
            thumbnail: item.thumbnail.lqip
        }
       }))
       ).catch(err => console.log(err))
    }, [])

    const handleOk = () => {
        setBlogs([...blogs, blog])
        handleCancel()
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    const openModal = () => {
        setIsModalVisible(true)
    }

    const handleChange = e => {
        setBlog({...blog, [e.target.name]: e.target.value})
    }

    const blogItems = blogs.map((item, i) => <Blog blog={item} key={i}/>)

    return(
        <>
        <Button onClick={openModal}>Add blog</Button>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
        {blogItems}
           
        </div>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
           <Input onChange={handleChange} name="title" placeholder="title"/>
           <Input onChange={handleChange} name="desc" placeholder="Description"/>
      </Modal>
        </>
    )
}

export default Blogs