
import { useState, useEffect } from 'react'
import { ProductCard } from './ProductCard'

const categories = ['All', 'Novels', 'Non-Fiction', 'Staff Picks']

export function Shop() {
const [products, setProducts] = useState([])
const [loading, setLoading] = useState(true)
const [filter, setFilter] = useState('All')

useEffect(() => {
async function loadProducts() {
try {

const response = await fetch('http://localhost:3000/api/products')
const data = await response.json()
setProducts(data)
} catch (err) {
console.error('Failed to load products', err)
} finally {
setLoading(false)
}
}

loadProducts()
}, [])

const filtered = filter === 'All' ? products : products.filter((p) => p.category === filter)
}