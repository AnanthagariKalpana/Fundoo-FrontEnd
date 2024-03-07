import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import CollectionsOutlinedIcon from '@mui/icons-material/CollectionsOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import '../Styles/NoteCard.scss'
function NoteCard()
{
    return(
        <div>
            <div className='main'>
            <div className='card-tlt'>
                <span>this is title</span>
            </div>
            <div className='desc'>
                <span>this is description</span>
            </div>
            <div className='icons'>
                <AddAlertOutlinedIcon/>
                <PersonAddAltOutlinedIcon/>
                <ColorLensOutlinedIcon/>
                <CollectionsOutlinedIcon/>
                <ArchiveOutlinedIcon/>
                <MoreVertOutlinedIcon/>

            </div>
            </div>
        </div>
    )
}
export default NoteCard;