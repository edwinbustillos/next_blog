'use client'
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SUPABASE_URL,
  headers: {
    'apikey': process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    'authorization': 'Bearer ' + process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    'Content-Type': 'application/json',
  },
})

export default axiosClient