
tinymce.init({
  selector: 'textarea',
  height: 650,
  menubar: false,
  plugins: [
    'advlist autolink lists link image charmap print preview anchor',
    'searchreplace visualblocks code fullscreen',
    'insertdatetime media table paste code help wordcount',
    'image'
  ],
  toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help image',
 
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
  entity_encoding:"raw"
});