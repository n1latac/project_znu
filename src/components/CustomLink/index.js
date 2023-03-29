import { Link, useMatch } from 'react-router-dom';

function CustomLink({children, to, ...props}) {
    const match = useMatch(to)
  return (
    <Link to={to} {...props} style={{
        color: match ? 'blue' : 'white',
        listStyle: 'none'
    }}>
        {children}
    </Link>
  )
}

export default CustomLink;
