import styles from '../styles/DesktopBars.module.css'
import styles2 from '../styles/MobileBars.module.css'

function generateContent(content, type="normal", mobile=false) {
  let output = ""
  if (type==="normal") {
    for (const [key, value] of Object.entries(content)) {
      output += `<li>${key}: ${value}</li>`;
   }
  }
  else if (type === "numbered") {
    for (const [key, value] of Object.entries(content)) {
      output += `<li>${key} - ${value}</li>`;
   }
  }
   else if (type === "numbered-italic") {
    for (const [key, value] of Object.entries(content)) {
      output += `<li>${key} - <i>${value}</i></li>`;
   }
  }
  else if (type === "unordered") {
    for (const [key, value] of Object.entries(content)) {
      output += `<li>${key}: ${value}</li>`;
   }
  }
  else if (type === "misc") {
      const tifOptions = Object.keys(content).map(key => <div className={styles.projectDiv}><h2 className={`${styles.projectTitle} ${mobile ? styles.mobile : ""}`}>{key}:</h2><p className={`${styles.projectDescription} ${mobile ? styles.mobile : ""}`}>{content[key].description}</p><p className={`${styles.projectTech} ${mobile ? styles.mobile : ""}`}>{`${Object.keys(content[key].technology)[0]}: ${content[key].technology[Object.keys(content[key].technology)[0]]}`}</p></div>)
    return tifOptions;
   }
  return output;
  }

export function SelectContent(props) {
  switch (props.type) {
          case "normal": 
      return <ul className={`${styles.stripped} ${styles.text} ${props.mobile ? styles.mobile : ""}`} dangerouslySetInnerHTML={{__html: generateContent(props.content)}}></ul>
          break;
          case "numbered": 
      return <ol className={`${props.type === "normal" ? styles.stripped : styles.fixed} ${styles.text}`} dangerouslySetInnerHTML={{__html: generateContent(props.content, props.type)}}></ol>
          break;
        case "numbered-italic":
          return <ol className={`${styles.numberedItalic} ${styles.text} ${props.mobile ? styles.mobile : ""}`} dangerouslySetInnerHTML={{__html: generateContent(props.content, props.type)}}></ol>
          break;
    case "misc":
      return generateContent(props.content, props.type, props.mobile)
      break;
          default:
          return <ul className={`${props.type === "normal" ? styles.stripped : styles.fixed} ${styles.text}  ${props.mobile ? styles.mobile : ""}`} dangerouslySetInnerHTML={{__html: generateContent(props.content, props.type)}}></ul>
  }
}