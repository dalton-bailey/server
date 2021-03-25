## Frontend on Netlify
[https://dgm3790-baileydalton.netlify.app/fossils](https://dgm3790-baileydalton.netlify.app/fossils)

You can search, add, edit and delete fossils.

## Backend on Heroku

[https://afternoon-temple-99772.herokuapp.com/fossil](https://afternoon-temple-99772.herokuapp.com/fossil)

### DELETE

```javascript
  const handleDelete = async () => {
    setDeleteOpen(false);
    console.log(selectedFossil._id);
    try {
      await axios.delete(`https://afternoon-temple-99772.herokuapp.com/fossil/delete`, {
        data: {
          fossilId: selectedFossil._id,
        },
      });
      fetchFossils();
    } catch (err) {
      console.error(err);
    }
  };
```

### PUT

```javascript
  const handleUpdate = async (values) => {
    try {
      const result = await axios.put(`https://afternoon-temple-99772.herokuapp.com/fossil/update`, {
        data: {
          fossilId: values.id,
          name: values.name,
          image: values.image,
          price: values.price,
        },
      });
      if (result.status === 200) {
        fetchFossils();
      }
    } catch (err) {
      console.error(err);
    }
  };
```

### POST

```javascript
 const handleAdd = async (values) => {
    console.log(values.name, values.image, values.price)
    try {
      const result = await axios.post(`https://afternoon-temple-99772.herokuapp.com/fossil`, {
          name: values.name,
          image: values.image,
          price: values.price,
      });
      if (result.status === 200) {
        fetchFossils()
      }
    } catch (err) {
      console.log(err)
    }
  }
```

### Get Endpoints

```javascript
fossilRouter.get('/', fossils)

fossilRouter.get('/id', getFossilById)

fossilRouter.get('/trex', getMostExpensiveFossil)
```

### Delete Endpoint

```javascript
fossilRouter.delete('/delete', deleteFossil)
```

### Put Endpoint

```javascript
fossilRouter.put('/update', updateFossil)
```

### Post Endpoint

```javascript
fossilRouter.post('/', postAddFossil)
```