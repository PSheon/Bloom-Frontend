// ** React Imports
import { useState, useCallback, ChangeEvent } from 'react'

// ** Next Imports
import Link from 'next/link'

// ** MUI Imports
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Tooltip from '@mui/material/Tooltip'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import LinearProgress from '@mui/material/LinearProgress'
import { SelectChangeEvent } from '@mui/material/Select'

// ** Third-Party Imports
import format from 'date-fns/format'

// ** Core Component Imports
import CustomChip from 'src/@core/components/mui/chip'

// ** Custom Component Imports
import RequestSheetListBreadcrumbs from 'src/views/shared/PageBreadcrumbs'
import RequestSheetListHeaderCardContent from 'src/views/request-sheet/list/HeaderCardContent'
import DataGrid, { GridColDef } from 'src/views/shared/wrapped-data-grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Hook Imports
import useDebounce from 'src/hooks/useDebounce'

// ** API Imports
import { useFindMeQuery, useUpdateMeOneMutation } from 'src/store/api/management/requestSheet'

// ** Util Imports
import {
  getRequestSheetTypeAttributes,
  getRequestSheetOperationalMethodAttributes,
  getRequestSheetCooperationIndustriesAttributes,
  getRequestSheetProcessStatusAttributes
} from 'src/utils'

// ** Type Imports
import { RequestSheetType } from 'src/types/api/requestSheetTypes'

interface CellType {
  row: RequestSheetType
}

// ** Styled component for the link in the dataTable
const LinkStyled = styled(Link)(({ theme }) => ({
  fontWeight: 600,
  fontSize: '1rem',
  cursor: 'pointer',
  textDecoration: 'none',
  color: theme.palette.text.secondary,
  '&:hover': {
    color: theme.palette.primary.main
  }
}))

const RequestSheetListPage = () => {
  // ** States
  const [filteredRequestSheetTitle, setFilteredRequestSheetTitle] = useState<string>('')
  const [filteredIsHighlighted, setFilteredIsHighlighted] = useState<string>('all')
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 })
  const debouncedFilteredRequestSheetTitle = useDebounce(filteredRequestSheetTitle, 300)

  // ** Hooks
  const { data: requestSheetsData, isLoading: isRequestSheetListLoading } = useFindMeQuery({
    filters: {
      ...(debouncedFilteredRequestSheetTitle !== '' && {
        $or: [{ title: { $containsi: debouncedFilteredRequestSheetTitle } }]
      }),
      ...(filteredIsHighlighted !== 'all' && { isHighlighted: filteredIsHighlighted === 'isHighlighted' })
    },
    pagination: {
      page: paginationModel.page + 1,
      pageSize: paginationModel.pageSize
    }
  })
  const [updateRequestSheet] = useUpdateMeOneMutation()

  // ** Vars
  const requestSheets = requestSheetsData?.data || []
  const totalRows = requestSheetsData?.meta.pagination.total || 0
  const columns: GridColDef[] = [
    {
      flex: 1,
      minWidth: 60,
      field: 'id',
      headerName: '編號',
      renderCell: ({ row }: CellType) => <LinkStyled href={`/request-sheet/edit/${row.id}`}>{`#${row.id}`}</LinkStyled>
    },
    {
      flex: 3,
      minWidth: 250,
      field: 'title',
      headerName: '計畫名稱',
      renderCell: ({ row }: CellType) => (
        <LinkStyled
          href={`/request-sheet/edit/${row.id}`}
          sx={{ fontWeight: 600, color: 'text.primary', overflow: 'hidden', textOverflow: 'ellipsis' }}
        >
          {row.title}
        </LinkStyled>
      )
    },
    {
      flex: 1,
      minWidth: 80,
      field: 'type',
      headerName: '計畫種類',
      renderCell: ({ row }: CellType) => (
        <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
          {getRequestSheetTypeAttributes(row.type).displayName}
        </Typography>
      ),
      valueGetter: ({ row }: CellType) => getRequestSheetTypeAttributes(row.type).displayName
    },
    {
      flex: 1,
      minWidth: 120,
      field: 'operationalMethod',
      headerName: '運作方式',
      renderCell: ({ row }: CellType) => (
        <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
          {getRequestSheetOperationalMethodAttributes(row.operationalMethod).displayName}
        </Typography>
      ),
      valueGetter: ({ row }: CellType) => getRequestSheetOperationalMethodAttributes(row.operationalMethod).displayName
    },
    {
      flex: 1,
      minWidth: 150,
      field: 'cooperationIndustries',
      headerName: '合作產業',
      renderCell: ({ row }: CellType) => (
        <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.primary' }}>
          {getRequestSheetCooperationIndustriesAttributes(row.cooperationIndustries).displayName}
        </Typography>
      ),
      valueGetter: ({ row }: CellType) =>
        getRequestSheetCooperationIndustriesAttributes(row.cooperationIndustries).displayName
    },
    {
      flex: 3,
      minWidth: 200,
      field: 'processStatus',
      headerName: '申請進度',
      renderCell: ({ row }: CellType) => {
        const { processStatus } = row
        const { displayName, color, processPercentage } = getRequestSheetProcessStatusAttributes(processStatus)

        return (
          <Grid container spacing={2} flexDirection='column' justifyContent='center'>
            <Grid item xs={12}>
              <CustomChip
                skin='light'
                size='small'
                rounded
                label={displayName}
                color={color}
                sx={{ textTransform: 'capitalize', '& .MuiChip-label': { lineHeight: '18px' } }}
              />
            </Grid>
            <Grid item xs={12}>
              <LinearProgress
                color='primary'
                value={processPercentage}
                variant='determinate'
                sx={{
                  height: 6,
                  width: '100%',
                  borderRadius: 8,
                  backgroundColor: 'background.default',
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 8
                  }
                }}
              />
            </Grid>
          </Grid>
        )
      },
      valueGetter: ({ row }: CellType) =>
        `${getRequestSheetProcessStatusAttributes(row.processStatus).processPercentage}%`
    },
    {
      flex: 2,
      minWidth: 125,
      field: 'createdAt',
      headerName: '申請日期',
      renderCell: ({ row }: CellType) => (
        <Typography variant='body2' sx={{ fontWeight: 600, color: 'text.secondary' }}>
          {format(new Date(row.createdAt), 'MM/dd/yyyy')}
        </Typography>
      ),
      valueGetter: ({ row }: CellType) => format(new Date(row.createdAt), 'MM/dd/yyyy')
    },
    {
      flex: 1,
      minWidth: 130,
      sortable: false,
      field: 'actions',
      headerName: '操作',
      disableColumnMenu: true,
      disableExport: true,
      renderCell: ({ row }: CellType) => {
        const { id, isHighlighted } = row

        return (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Tooltip title='查看'>
              <IconButton size='small' component={Link} sx={{ mr: 0.5 }} href={`/request-sheet/edit/${id}`}>
                <Icon icon='mdi:eye-outline' />
              </IconButton>
            </Tooltip>
            <Tooltip title={isHighlighted ? '已加星號' : '未加星號'}>
              <IconButton
                size='small'
                sx={{ mr: 0.5 }}
                color={isHighlighted ? 'primary' : 'inherit'}
                onClick={() => handleHighlightRequestSheet(id, !isHighlighted)}
              >
                <Icon icon={isHighlighted ? 'mdi:star' : 'mdi:star-outline'} />
              </IconButton>
            </Tooltip>
          </Box>
        )
      }
    }
  ]

  // ** Logics
  const handleFilterRequestSheetTitle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilteredRequestSheetTitle(e.target.value)
  }, [])
  const handleIsHighlightedChange = useCallback((e: SelectChangeEvent) => {
    setFilteredIsHighlighted(e.target.value)
  }, [])
  const handleHighlightRequestSheet = async (id: number, isHighlighted: boolean) => {
    await updateRequestSheet({ id, data: { isHighlighted } })
  }

  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <RequestSheetListBreadcrumbs pageLevels={[{ title: '申請管理' }]} />
      </Grid>
      <Grid item xs={12}>
        <Card>
          <RequestSheetListHeaderCardContent
            filteredRequestSheetTitle={filteredRequestSheetTitle}
            handleFilterRequestSheetTitle={handleFilterRequestSheetTitle}
            filteredIsHighlighted={filteredIsHighlighted}
            handleIsHighlightedChange={handleIsHighlightedChange}
          />
          <DataGrid
            autoHeight
            rows={requestSheets}
            loading={isRequestSheetListLoading}
            columns={columns}
            checkboxSelection
            disableRowSelectionOnClick
            pageSizeOptions={[2, 10, 25, 50]}
            paginationMode='server'
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            rowCount={totalRows}
          />
        </Card>
      </Grid>
    </Grid>
  )
}

RequestSheetListPage.acl = {
  action: 'read',
  subject: 'user-page'
}

export default RequestSheetListPage
