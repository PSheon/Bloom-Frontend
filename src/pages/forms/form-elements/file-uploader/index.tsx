// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

// ** Core Component Imports
import PageHeader from 'src/@core/components/page-header'
import CardSnippet from 'src/@core/components/card-snippet'
import DropzoneWrapper from 'src/@core/styles/libs/react-dropzone'

// ** Custom Component Imports
import FileUploaderSingle from 'src/views/forms/form-elements/file-uploader/FileUploaderSingle'
import FileUploaderMultiple from 'src/views/forms/form-elements/file-uploader/FileUploaderMultiple'
import FileUploaderRestrictions from 'src/views/forms/form-elements/file-uploader/FileUploaderRestrictions'

// ** Constant Imports
import * as source from 'src/views/forms/form-elements/file-uploader/FileUploaderSourceCode'

const LinkStyled = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FileUploader = () => {
  return (
    <DropzoneWrapper>
      <Grid container spacing={6} className='match-height'>
        <PageHeader
          title={
            <Typography variant='h5'>
              <LinkStyled href='https://github.com/react-dropzone/react-dropzone/' target='_blank'>
                React Dropzone
              </LinkStyled>
            </Typography>
          }
          subtitle={<Typography variant='body2'>Simple HTML5 drag-drop zone with React.js</Typography>}
        />
        <Grid item xs={12}>
          <CardSnippet
            title='Upload Multiple Files'
            code={{
              tsx: source.FileUploaderMultipleTSXCode,
              jsx: source.FileUploaderMultipleJSXCode
            }}
          >
            <FileUploaderMultiple />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Upload Single Files'
            code={{
              tsx: source.FileUploaderSingleTSXCode,
              jsx: source.FileUploaderSingleJSXCode
            }}
          >
            <FileUploaderSingle />
          </CardSnippet>
        </Grid>
        <Grid item xs={12}>
          <CardSnippet
            title='Upload Files with Restrictions'
            code={{
              tsx: source.FileUploaderRestrictionsTSXCode,
              jsx: source.FileUploaderRestrictionsJSXCode
            }}
          >
            <FileUploaderRestrictions />
          </CardSnippet>
        </Grid>
      </Grid>
    </DropzoneWrapper>
  )
}

export default FileUploader
