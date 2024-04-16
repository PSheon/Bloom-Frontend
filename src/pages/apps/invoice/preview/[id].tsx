// ** Next Imports
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from 'next/types'

// ** Third-Party Imports
import axios from 'axios'

// ** Core Component Imports
import Preview from 'src/views/apps/invoice/preview/Preview'

// ** Type Imports
import { InvoiceType } from 'src/types/apps/invoiceTypes'

const InvoicePreview = ({ id }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <Preview id={id} />
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await axios.get('/apps/invoice/invoices')
  const data: InvoiceType[] = await res.data.allData

  const paths = data.map((item: InvoiceType) => ({
    params: { id: `${item.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
  return {
    props: {
      id: params?.id
    }
  }
}

export default InvoicePreview
