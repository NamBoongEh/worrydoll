import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PostActionButtons from '../../components/post/PostActionButtons';
import PostViewer from '../../components/post/PostViewer';
import { readPost, unloadPost } from '../../modules/post';
import { setOriginalPost } from '../../modules/write';

const PostViewerContainer = ({ match, history }) => {
  // 처음 마운트 될 때 포스트 읽기 api 요청
  const { postId } = match.params;
  const dispatch = useDispatch();
  const { post, error, loading, user } = useSelector(
    ({ post, loading, user }) => ({
      post: post.post,
      error: post.error,
      loading: loading['post/READ_POST'],
      user: user.user,
    }),
  );

  useEffect(() => {
    dispatch(readPost(postId));
    // 언마운트 될 때 리덕스에서 포스트 데이터 없애기
    return () => {
      dispatch(unloadPost());
    };
  }, [dispatch, postId]);

  const onEdit = () => {
    dispatch(setOriginalPost(post));
    history.push('/write');
  };

  const ownPost = (user && user._id) === (post && post.user._id);

  return (
    <PostViewer
      post={post}
      loading={loading}
      error={error}
      actionButtons={<PostActionButtons onEdit={onEdit} />}
    />
  );
};

export default withRouter(PostViewerContainer);