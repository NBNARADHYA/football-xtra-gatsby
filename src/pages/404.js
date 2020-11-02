import { navigate } from "gatsby"
import { useEffect } from "react"

const Redirect = () => {
  useEffect(() => {
    navigate("/")
  }, [])
  return null
}

export default Redirect
